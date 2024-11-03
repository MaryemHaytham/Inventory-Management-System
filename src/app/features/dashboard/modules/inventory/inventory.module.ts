import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InventoryComponent,
    AddEditProductComponent,
    ProductInfoComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    AddEditProductComponent,
    SharedModule,
    MatFormFieldModule,
    

  ],
  exports:[
    ProductInfoComponent,
    AddEditProductComponent
    

  ]
})
export class InventoryModule { }
