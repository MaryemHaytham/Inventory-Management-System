import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventoryPopupComponent } from 'src/app/shared/components/inventory-popup/inventory-popup.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  constructor(private dialog: MatDialog) {}

  openNewOrderDialog() {
    this.dialog.open(InventoryPopupComponent, {
      width: '500px',
      data: {}
    });
  }

}
