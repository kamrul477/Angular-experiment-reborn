﻿import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product.model';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService {

    private _productUrl = 'http://localhost:51727/api/Product';
    constructor(private _http: Http) { }

    getProducts(): Observable<Product[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <Product[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}