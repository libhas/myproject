import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpRequest } from "../types/http-request";
import { HttpClientModule } from '@angular/common/http';


@Injectable()
export abstract class HttpServiceBase {

  constructor(
    protected http: HttpClient,

  ) { }

  get$<T = string>(httpRequest: HttpRequest): Observable<T> {
    console.log(httpRequest)
    if (httpRequest.isText) { return this._get$(httpRequest) }

    return this.http.get<T>(httpRequest.fullUrl, { params: { ...httpRequest.fullParams } });
  }

  post$<T = string>(httpRequest: HttpRequest): Observable<T> {


    if (httpRequest.isText) { return this._post$(httpRequest) }
    console.log();

    return this.http.post<T>(httpRequest.fullUrl, httpRequest.body, { headers: httpRequest.headers, params: { ...httpRequest.fullParams } });
  }
  request$(httpRequest: HttpRequest): Observable<HttpResponse<any>> {
    return this.http.request(
      'GET',
      httpRequest.fullUrl,
      {
        params: { ...httpRequest.fullParams },
        observe: 'response',
        responseType: 'blob',

      });
  }

  requestPost$(httpRequest: HttpRequest): Observable<HttpResponse<any>> {
    return this.http.request(
      'POST',
      httpRequest.fullUrl,
      {

        body: { ...httpRequest.body },
        params: { ...httpRequest.fullParams },
        observe: 'response',
        responseType: 'blob',

      });
  }

  private _get$(httpRequest: HttpRequest): Observable<any> {
    return this.http.get(httpRequest.fullUrl, { params: { ...httpRequest.fullParams }, responseType: 'text' });
  }
  private _post$(httpRequest: HttpRequest): Observable<any> {


    return this.http.post(httpRequest.fullUrl, httpRequest.body, { params: { ...httpRequest.fullParams }, responseType: 'text' });

  }

}
