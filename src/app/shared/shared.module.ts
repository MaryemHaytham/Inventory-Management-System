import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicPopupComponent } from './components/dynamic-popup/dynamic-popup.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
  DynamicPopupComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,MatCheckboxModule,MatButtonModule,MatIconModule,
  ],
  exports:[
    FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule,MatCheckboxModule,MatButtonModule,MatIconModule,
    NavbarComponent,
    SidebarComponent,
    DynamicPopupComponent
  ],

})
export class SharedModule {}