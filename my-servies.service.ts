import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpServiceBase } from './base-servies.service';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { HttpRequest } from '../types/http-request';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Product } from '../types/product';


@Injectable({
  providedIn: 'root'
})


export class MyServiesService extends HttpServiceBase {


  myPromo: [any] | undefined;
  private get _serverUrl(): string {
    return "http://localhost/backend/";
  }
  getAllProduct(): Observable<any> {
    return this.get$(new HttpRequest({
      url: this._serverUrl+"select.php"

    }));
  }
  getFilter(char: String): Observable<any> {
    return this.get$(new HttpRequest({
      url: this._serverUrl + "update.php?char=" + char,

    }));

  }
  deletProduct(newProduct: Object): Observable<any> {

    return this.post$(new HttpRequest({
      url: this._serverUrl + "delete.php",
      body: newProduct
    }))
  }
  insertNewProduct(newProduct: Object): Observable<any> {


    return this.post$(new HttpRequest({


      url: this._serverUrl + "insert.php",
      body: newProduct
    }))
  }
  upDate(newProduct: Object, product: Object): Observable<any> {

    return this.post$(new HttpRequest({

      url: this._serverUrl + "update.php",
      body: { newProduct, product }
    }))
  }



}


