import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicPopupComponent } from 'src/app/shared/components/dynamic-popup/dynamic-popup.component';
import { AuthService } from '../../services/auth.service';
import { IResponse } from '../../model/auth';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    confirmPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
    digit1: new FormControl(null, Validators.required),
    digit2: new FormControl(null, Validators.required),
    digit3: new FormControl(null, Validators.required),
    digit4: new FormControl(null, Validators.required),
  });

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
  popupContainer!: ViewContainerRef;

  private _ComponentFactoryResolver = inject(ComponentFactoryResolver);
  private _AuthService = inject(AuthService);

  autoFocusNext(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value && this.otpInputs) {
      const inputsArray = Array.from(this.otpInputs);
      if (index < inputsArray.length - 1) {
        inputsArray[index + 1].nativeElement.focus();
      }
    }
  }

  onSubmit(resetPassword: FormGroup) {
    if (resetPassword.valid) {
      let resetObj = {
        email: resetPassword.get('email')?.value,
        confirmPassword: resetPassword.get('confirmPassword')?.value,
        newPassword: resetPassword.get('newPassword')?.value,
        otp: Object.keys(resetPassword.value)
          .map((el) => (el.includes('digit') ? resetPassword.value[el] : null))
          .join(''),
      };
      this._AuthService.resetPassword(resetObj).subscribe({
        next: (res: IResponse<boolean>) => console.log(res),
        error: (error: HttpErrorResponse) => console.log(error),
        complete: () => {},
      });
      const componentFactory =
        this._ComponentFactoryResolver.resolveComponentFactory(
          DynamicPopupComponent
        );
      this.popupContainer.clear();
      const componentRef =
        this.popupContainer.createComponent(componentFactory);
      componentRef.instance.close.subscribe(() => this.popupContainer.clear());
      componentRef.setInput('valueToBeVisible', 'Forget Password');
    }
  }
}
