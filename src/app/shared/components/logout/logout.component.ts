import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(public dialogRef: MatDialogRef<LogoutComponent>, private router: Router) { }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  onCancel() {
    this.dialogRef.close();
  }

}
