import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import{Products} from './models/items'

@Injectable()
export class ItemServices {

  private url = '../assets/product.json';
 constructor(private http: Http){}

 getItemsProduct()
 {
    return this.http.get(this.url)
                   .map ((res: Response) => res.json());
 }
 getPostProduct(model: Products): Observable<Products>
 {
    return this.http.post(this.url, JSON.stringify(model))
    .map((res: Response) => res.json());
 }


}