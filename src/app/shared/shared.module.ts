import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicPopupComponent } from './components/dynamic-popup/dynamic-popup.component';

@NgModule({
  declarations: [
    DynamicPopupComponent
  ],
  exports: [
    DynamicPopupComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
