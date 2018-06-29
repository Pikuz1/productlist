import{Injectable} from '@angular/core';
import {Products} from './../app/models/items';
import {Response} from '@angular/http';
import{Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductServices{

    private _Producturl='./../../assets/product.json';

    constructor(private _http:Http){

    }

    getProductData():Observable<Products[]>
    {
        return this._http.get(this._Producturl)
        .map((response:Response)=><Products[]>response.json())
        .do((data)=>JSON.stringify(data))
        .catch(this.CatchError);

    }

    private CatchError(error:Response)
    {
        console.log(error);
        return Observable.throw(error.json().error || 'Serve Error')
    }

    getProductDetailData(id:number):Observable<Products>
    {
        return this._http.get(this._Producturl)
        .map((response:Response)=>{
            var productArrayJson=response.json();


            var productEntity:Products=productArrayJson.find((items)=>items.id==id);

        return productEntity;
        })
        .catch(this.CatchError);
    }
}