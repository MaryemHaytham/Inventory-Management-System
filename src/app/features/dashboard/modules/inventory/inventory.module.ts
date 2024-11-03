import { NgModule } from '@angular/core';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddEditProductComponent,
  ],
  imports: [
    InventoryRoutingModule,
    SharedModule,
    CommonModule
  ],
})
export class InventoryModule {}
