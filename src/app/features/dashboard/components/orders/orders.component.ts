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

  listData: {
    products: string;
    price: string;
    quantity: string;
    threshold: string;
    expiryDate: string;
    availability: string;
  }[] = [
    {
      products: 'Vcola',
      price: '₹257',
      quantity: '22 Packets',
      threshold: '12 Packets',
      expiryDate: '21/12/22',
      availability: 'Out of stock',
    },
    {
      products: 'Vcola',
      price: '₹257',
      quantity: '22 Packets',
      threshold: '12 Packets',
      expiryDate: '21/12/22',
      availability: 'Out of stock',
    },
    {
      products: 'Vcola',
      price: '₹257',
      quantity: '22 Packets',
      threshold: '12 Packets',
      expiryDate: '21/12/22',
      availability: 'Out of stock',
    },
    {
      products: 'Vcola',
      price: '₹257',
      quantity: '22 Packets',
      threshold: '12 Packets',
      expiryDate: '21/12/22',
      availability: 'Out of stock',
    },
    {
      products: 'Vcola',
      price: '₹257',
      quantity: '22 Packets',
      threshold: '12 Packets',
      expiryDate: '21/12/22',
      availability: 'Out of stock',
    },
  ];

  openNewOrderDialog() {
    this.dialog.open(GeneralPopupComponent, {
      width: '500px',
      data: {}
    });
  }

}
