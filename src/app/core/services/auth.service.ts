import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/auth';
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    return !!token;
  }

  getMe() {
    return this.http.get(this.baseUrl);
  }

  login(body: Object, _params?: Object): Observable<Object> {
    if (_params) {
      const params = new HttpParams();

      for (let key in _params) {
        params[key] = _params[key];
      }

      return this.http.post(this.baseUrl, body, {
        params: params
      });
    }

    return this.http.post(this.baseUrl, body);
  }
}
