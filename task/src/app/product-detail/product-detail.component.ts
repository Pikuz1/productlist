import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Products} from './../models/items';
import {ProductServices} from './../product_list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id:number;
  user:string;
  details:string="Products List Details";
  Product: Products;

  constructor(private _activatedRoute:ActivatedRoute,
              private _route:Router,
              private _productServices:ProductServices) { }

  ngOnInit() {

    this._activatedRoute.params

    .subscribe((params)=>{
      let id = params['ProductId'];
      this.details+=""+""+id;
      this._productServices.getProductDetailData(id)
      .subscribe((data)=>{
        this.Product = data;
      })
    })
  }

  onBack(){
    this._route.navigate(['/products']);
  }

}
