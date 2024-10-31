import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IResponse } from '../../model/auth';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  ForgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),

  });
  constructor(private _Router: Router, private _AuthService: AuthService) {}

  submitForgetPasswordForm(forgetPasswordFormData: FormGroup) {
    if (forgetPasswordFormData.valid) {
      this._AuthService.forgetPassword(forgetPasswordFormData.value).subscribe({
        next: (res: IResponse<boolean>) => console.log(res),
        error: (error: HttpErrorResponse) => console.log(error),
        complete: () => {  },
      });
    }
  }
}
