import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeneralPopupComponent } from 'src/app/shared/components/order-popup/general-popup.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(private dialog: MatDialog) {}

  openNewOrderDialog() {
    this.dialog.open(GeneralPopupComponent, {
      width: '500px',
      data: {}
    });
  }

}
