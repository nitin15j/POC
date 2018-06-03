import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, LoginRoutingModule],
  declarations: [LoginComponent]
})
export class LoginModule {}
