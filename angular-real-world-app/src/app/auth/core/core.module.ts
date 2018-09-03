import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ApiGatewayService } from './service/api-gateway/api-gateway.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }, ApiGatewayService],
  declarations: []
})
export class CoreModule {}
