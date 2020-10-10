import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class FeedsService extends BaseService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    super();
    this.baseUrl = '/feed';
  }

  getFeed(_params?: Object) {
    if (_params) {
      const params = this.generateParams(_params);
    
      return this.http.get(this.baseUrl, {
        params: params
      });
    }

    return this.http.get(this.baseUrl);
  }
}
