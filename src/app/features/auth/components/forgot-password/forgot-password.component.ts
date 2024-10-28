

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {

  ForgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
   
  });
  constructor(private _Router:Router){

  }
 

  submitForgetPasswordForm(forgetPasswordFormData: FormGroup) {
    if (forgetPasswordFormData.valid) {
      console.log(forgetPasswordFormData.value);
    }
  }
  back(){
 this._Router.navigateByUrl('login')
  }
}

