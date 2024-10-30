import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  isPopupVisible = false;

  openPopup() {
    this.isPopupVisible = true;
  }
  
  closePopup() {
    this.isPopupVisible = false;
  }

}
