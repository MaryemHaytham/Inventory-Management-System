import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventoryPopupComponent } from 'src/app/shared/components/inventory-popup/inventory-popup.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  @ViewChildren('trData') trData!: QueryList<ElementRef>;
  constructor(private dialog: MatDialog, private _Router: Router) {}

  ngAfterViewInit(): void {
    this.trData.forEach((el, index) => {
      el.nativeElement.addEventListener('click', () => {
        this._Router.navigate([`/dashboard/product-info/${index + 1}`]);
      });
    });
  }

  openNewOrderDialog() {
    this.dialog.open(InventoryPopupComponent, {
      width: '500px',
      data: {},
    });
  }
}
