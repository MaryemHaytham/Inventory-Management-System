import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../components/logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) { }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      data: {},
      width: '35%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

      }
    });
  }

}
