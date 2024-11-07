import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicPopupComponent } from './components/dynamic-popup/dynamic-popup.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';

import { GeneralPopupComponent } from './components/order-popup/general-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InventoryPopupComponent } from './components/inventory-popup/inventory-popup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    DynamicPopupComponent,
    NavbarComponent,
    SidebarComponent,
    GeneralPopupComponent,
    InventoryPopupComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    NgxDropzoneModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
    SidebarComponent,
    DynamicPopupComponent,
    GeneralPopupComponent,
    InventoryPopupComponent,
    MatMenuModule,
    CommonModule
  ],
})
export class SharedModule {}
