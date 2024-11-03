import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventoryPopupComponent } from 'src/app/shared/components/inventory-popup/inventory-popup.component';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  product:any;
  listProduct:any;
  @ViewChildren('trData') trData!: QueryList<ElementRef>;
  constructor(private dialog: MatDialog, private _Router: Router, private _InventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

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

  getAllProduct() {
    this._InventoryService.allProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.product=res;
        // this.listProduct=this.product.data;
      }, error: (err) => {

      }, complete: () => {

      }
    })
  }


}
