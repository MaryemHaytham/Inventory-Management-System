import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ComponentFactoryResolver,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicPopupComponent } from 'src/app/shared/components/dynamic-popup/dynamic-popup.component';
import { HelperService } from 'src/app/shared/service/helper.service';
import { IResponse } from '../../model/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      oldPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      newPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    { validators: this.passwordsMatchValidator }
  );

  private _ComponentFactoryResolver = inject(ComponentFactoryResolver);
  private _AuthService = inject(AuthService);
  private _HelperService = inject(HelperService);

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword && confirmPassword && newPassword !== confirmPassword
      ? { passwordsMismatch: true }
      : null;
  }

  @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
  popupContainer!: ViewContainerRef;

  onSubmit(changePassword: FormGroup) {
    if (changePassword.valid) {
      this._AuthService.changePassword(changePassword.value).subscribe({
        next: (res: IResponse<boolean>) => console.log(res),
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: () => {
          const componentFactory =
            this._ComponentFactoryResolver.resolveComponentFactory(
              DynamicPopupComponent
            );
          this.popupContainer.clear();
          const componentRef =
            this.popupContainer.createComponent(componentFactory);
          componentRef.instance.close.subscribe(() =>
            this.popupContainer.clear()
          );
          componentRef.setInput('valueToBeVisible', 'change');
        },
      });
    }
  }
}
