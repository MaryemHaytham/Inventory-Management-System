import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IResponse, ISignin } from '../../model/auth';
import { HelperService } from 'src/app/shared/service/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;

  signinForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
    ]),
  });

  constructor(private _AuthService: AuthService, private router: Router) {}
  private _HelperService = inject(HelperService);

  onSubmit(data: FormGroup) {
    this._AuthService.login(data.value).subscribe({
      next: (res: IResponse<string>) => console.log(res),
      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () => { 
        this._HelperService.success('Welcome Back');
       },
    });
  }
}
