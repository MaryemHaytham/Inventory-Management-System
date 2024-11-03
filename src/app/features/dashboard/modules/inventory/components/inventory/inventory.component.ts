import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventoryPopupComponent } from 'src/app/shared/components/inventory-popup/inventory-popup.component';
import { InventoryService } from '../../services/inventory.service';

import { IProduct, IProductData } from '../../models/IProduct';
import { HelperService } from 'src/app/shared/service/helper.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  product:any;
  listProduct:any;
  @ViewChildren('trData') trData!: QueryList<ElementRef>;

  constructor(
    private dialog: MatDialog,
    private _Router: Router,
    private _InventoryService: InventoryService,
    private _HelperService: HelperService
  ) {}

  listData: {
    name: string;
    price: string;
    quantity: string;
    threshold: string;
    expiryDate: string;
    availability: string;
    category: string;
  }[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this._InventoryService.products().subscribe({
      next: (res: IProduct) => {
        this.listData = res.data.map((product: IProductData) => ({
          name: product.name,
          price: `₹${product.price}`,
          quantity: `${product.quantity} Packets`,
          threshold: `${product.threshold} Packets`,
          expiryDate: new Date(product.expiryDate).toLocaleDateString(),
          availability: product.quantity > 0 ? 'In-stock' : 'Out of stock',
          category: product.category,
        }));
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching products:', error);
      },
    });
  }

  openNewOrderDialog() {
    this.dialog.open(InventoryPopupComponent, {
      width: '500px',
      data: {},
    });
  }

  navigateToProductInfo(index: number) {
    this._Router.navigate([`/dashboard/product-info/${index + 1}`]);
  }

  
}
