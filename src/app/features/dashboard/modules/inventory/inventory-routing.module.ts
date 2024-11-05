import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';


const routes: Routes = [
  {
    path: "", component: InventoryComponent, children: [
      { path: '', redirectTo: 'overView', pathMatch: 'full' },
      { path: "OverView", component: InventoryComponent, title: 'Overview' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
