import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor';
import { AuthService } from './services/auth.service';
import { BaseService } from './services/base.service';
import { FeedsService } from './services/feeds.service';
import { HttpInterceptorProviders } from './interceptor/index.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpInterceptorProviders,
    BaseService,
    AuthService,
    FeedsService
  ]
})
export class CoreModule { }
