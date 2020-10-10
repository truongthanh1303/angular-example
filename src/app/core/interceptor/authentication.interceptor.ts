import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = this.authService.getToken();
    const token = 'ertyuidfghjkcvbnm,4567890-';
    const headerRequest = {};
    if (token) {
      headerRequest['Authorization'] = `Bearer ${token}`;

      request = request.clone({
        setHeaders: { ...headerRequest }
      });
    }
    return next.handle(request);
  }
}
