import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  imports: [CommonModule, AccountsRoutingModule],
  declarations: [AccountListComponent, MyAccountComponent]
})
export class AccountsModule {}
