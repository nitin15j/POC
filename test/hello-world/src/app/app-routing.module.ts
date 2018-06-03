import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'orders',
    loadChildren: '../app/orders/orders.module#OrdersModule'
  },
  {
    path: 'accounts',
    loadChildren: '../app/accounts/accounts.module#AccountsModule'
  },
  {
    path: 'login',
    loadChildren: '../app/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
