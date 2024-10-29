import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';


@NgModule({
  declarations: [
    InventoryComponent,
    AddEditProductComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
