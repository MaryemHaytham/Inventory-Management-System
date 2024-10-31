import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IResponse } from '../../model/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/shared/service/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  private _AuthService = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]]
    });
  }
  private _HelperService = inject(HelperService);


  
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this._AuthService.register(form.value).subscribe({
        next: (res: IResponse<number>) => console.log(res),
        error: (error: HttpErrorResponse) => this._HelperService.error(error),
        complete: () => { 
          this._HelperService.success('Welcome Back');
         },
      })
    }
  }

}
