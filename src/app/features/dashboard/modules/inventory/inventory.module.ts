import { NgModule } from '@angular/core';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AddEditProductComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    MatFormFieldModule,
    

  ],
})
export class InventoryModule {}
