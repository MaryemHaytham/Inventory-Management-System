import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  isPopupVisible = false;

openPopup() {
  this.isPopupVisible = true;
}

closePopup() {
  this.isPopupVisible = false;
}

}
