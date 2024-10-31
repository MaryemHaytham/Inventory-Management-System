import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  ISignin, IRegister, IChangePassword, IResetPassword, IForgetPassword, IResponse
} from '../model/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) {}

  login(data: ISignin): Observable<IResponse<string>> {
    return this._HttpClient.post<IResponse<string>>('LoginUserEndPoint', data);
  }

  register(data: IRegister): Observable<IResponse<number>> {
    return this._HttpClient.post<IResponse<number>>('RegisterUserEndPoint', data);
  }

  forgetPassword(data: IForgetPassword): Observable<IResponse<boolean>> {
    return this._HttpClient.post<IResponse<boolean>>('ForgetPasswordEndPoint', data);
  }

  resetPassword(data: IResetPassword): Observable<IResponse<boolean>> {
    return this._HttpClient.post<IResponse<boolean>>('RestPasswordEndPoint', data);
  }

  changePassword(data: IChangePassword): Observable<IResponse<boolean>> {
    return this._HttpClient.post<IResponse<boolean>>('ChangePasswordEndPoint', data);
  }
}
