import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http"

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPService {

    private URL = "https://jsonplaceholder.typicode.com";

    constructor(
        private http:Http
    ) {}

    get(api, params?: string) {
    return this.http.get(this.URL + api)
      .map(response => <string[]> response.json())
      .catch((err:any) => Observable.throw(err.json().error || 'Server Error'));
  }
}
