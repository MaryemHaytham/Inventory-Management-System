import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IResponse } from '../../model/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/shared/service/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  registerForm: FormGroup;

  private _AuthService = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  private _HelperService = inject(HelperService);
  private _Router = inject(Router)

  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword && confirmPassword && newPassword !== confirmPassword
      ? { passwordsMismatch: true }
      : null;
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._AuthService.register(form.value).subscribe({
        next: (res: IResponse<number>) => console.log(res),
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: () => {
          this._HelperService.success('Welcome Back');
          setTimeout(() => this._Router.navigate(['/login']) , 1000)
        },
      });
    }
  }
}
