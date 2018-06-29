import { Component, OnInit } from '@angular/core';
import {ItemServices} from '../item.services';
import {Products} from '../models/items';
import {SearchFilterPipe} from '../custom.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:[ './product.component.css']
})
export class ProductComponent implements OnInit {

  datas:Products[];
  product: string = "";
  constructor(private itemServices: ItemServices) { }

  ngOnInit() {
    this.itemServices.getItemsProduct().subscribe((item)=> {
      this.datas = item;
    })
  }

  show: boolean = false;
  clicked() {

      //alert("test");

      this.show = !this.show;
      //alert("test");
  }


}

