import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignin } from '../model/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient){}

  onSignin(data:ISignin):Observable<ISignin>
  {
    return this._HttpClient.post<ISignin>('',data)
  }

}

