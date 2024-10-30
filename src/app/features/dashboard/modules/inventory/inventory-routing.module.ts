import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './components/overview/overview.component';

import { InventoryComponent } from './inventory.component';


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
