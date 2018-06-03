import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountListComponent } from "./account-list/account-list.component";
import { MyAccountComponent } from "./my-account/my-account.component";

const routes: Routes = [
  { path: "", component: AccountListComponent },
  { path: "myaccount", component: MyAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
