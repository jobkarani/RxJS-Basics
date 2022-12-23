import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(){}

  product: Product[] = [];

  // prods = new Product('leaf rake','gdn 0011',Date.now(),'5');
  // prod2 = new Product('leaf rake','gdn 0011',Date.now(),'5');
  // prod3 = new Product('leaf rake','gdn 0011',Date.now(),'5');

  ngOnInit(){
    console.log(this.product);
  }
}
