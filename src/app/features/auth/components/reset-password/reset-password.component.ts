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
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DynamicPopupComponent } from 'src/app/shared/components/dynamic-popup/dynamic-popup.component';
import { AuthService } from '../../services/auth.service';
import { IResponse } from '../../model/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/shared/service/helper.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    digit1: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]$')]),
    digit2: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]$')]),
    digit3: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]$')]),
    digit4: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]$')])
  }, { validators: this.passwordsMatchValidator });

  
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword && confirmPassword && newPassword !== confirmPassword ? { passwordsMismatch: true } : null;
  }

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
  private _HelperService = inject(HelperService);


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
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: () => { 
          this._HelperService.success('Welcome Back');
         },
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
