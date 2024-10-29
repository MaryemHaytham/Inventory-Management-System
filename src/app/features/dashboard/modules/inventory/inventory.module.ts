import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';

import { OverviewComponent } from './components/overview/overview.component';

import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InventoryComponent,
    AddEditProductComponent,
    ProductInfoComponent,
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,

  ],
  exports:[
    ProductInfoComponent,
    SharedModule

  ]
})
export class InventoryModule { }
