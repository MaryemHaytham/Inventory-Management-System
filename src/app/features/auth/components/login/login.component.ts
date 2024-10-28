import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: boolean = true;

  constructor(private _AuthService: AuthService, private router: Router) { }

  signinForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('')]),
    password: new FormControl(null, [Validators.required, Validators.pattern('')])
  })

  onSubmit(data: FormGroup) {
    this._AuthService.onSignin(data.value).subscribe({
      next: (res: any) => {
        console.log(res);

      }, error: (err) => {
        console.log(err);

      }, complete: () => {
        this.router.navigate(['/dashboard'])
      }
    })
  }

}
