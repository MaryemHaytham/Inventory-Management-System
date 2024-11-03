import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';
import { IDeleteResponse, IProductData, ISignleProduct } from '../../models/IProduct';
import { HttpErrorResponse } from '@angular/common/http';
import { HelperService } from 'src/app/shared/service/helper.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [ DatePipe ],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent {
  productData: IProductData = {
    category: '',
    expiryDate: '',
    imageUrl: '',
    name: '',
    price: 0,
    quantity: 0,
    threshold: 0,
    unit: '',
  };
  productId: number = 0;

  private _ActivatedRoute = inject(ActivatedRoute);
  private _InventoryService = inject(InventoryService);
  private _HelperService = inject(HelperService);

  ngOnInit(): void {
    this.routeCheck();
  }

  routeCheck(): void {
    this._ActivatedRoute.params.subscribe((params: Params) => {
      this.productId = +params['id'];
      this.getProductData(+params['id']);
    });
  }

  getProductData(id: number): void {
    this._InventoryService.getProductById(id).subscribe({
      next: (res: ISignleProduct) => {
        this.productData = res.data;
      },
      error: (error: HttpErrorResponse) => this._HelperService.error(error),
      complete: () => {},
    });
  }

  onDelete(): void {
    const productId: number = this.productId;
    this._InventoryService.deleteProductById(productId).subscribe({
      next: (res: IDeleteResponse) => {  },
      error: (error: HttpErrorResponse) => {  },
      complete: () => {  }
    })
  }
}
