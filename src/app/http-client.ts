import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    /*headers.append('Authorization', 'Basic ' +
      btoa('username:password')); */
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data: URLSearchParams) : Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');




    this.createAuthorizationHeader(headers);
    return this.http.post(url, data.toString(), {
      headers: headers
    });
  }
}