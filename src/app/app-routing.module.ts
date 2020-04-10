import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAllOrdersComponent } from './pages/page-all-orders/page-all-orders.component';
import {PageOrderComponent } from './pages/page-order/page-order.component';

const routes: Routes = [
  {path: '', component: PageOrderComponent},
  {path: 'orders', component: PageAllOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
