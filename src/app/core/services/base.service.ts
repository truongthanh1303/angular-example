import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  generateParams(params: Object) {
    if (!params) {
      return throwError({message: 'Request param is invalid!'});
    }

    const _params = {};
    for (let key in params) {
      _params[key] = params[key];
    }

    return _params;
  }
}
