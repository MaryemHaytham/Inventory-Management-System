import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './modules/inventory/components/inventory/inventory.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductInfoComponent } from './modules/inventory/components/product-info/product-info.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'orders', component: OrdersComponent, title: 'Orders' },
      {
        path: 'inventory',
        component: InventoryComponent,
        children: [
          { path: 'inventory', component: InventoryComponent, title: 'inventory' },
        
        ],
      },
      { path: 'product-info', component: ProductInfoComponent, title: 'productInfo' },
      { path: 'store', component: StoreComponent, title: 'store' }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
