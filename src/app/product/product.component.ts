import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  state = 'normal';
  products;
  product = {Name:''};

  constructor(private productService:ProductService, private router:Router) { }
  
  ngOnInit() {
    this.productService.getAll().subscribe(res=>{
      this.products = res;
    });
  }

  changeState(state){
    this.state = state;
  }

  detailProduct(item){
    this.router.navigate([`/products/${item.id}`]);
  }

  delete(item){
    this.productService.delete(item).subscribe(res=>{
      let idx = this.products.indexOf(item);
      this.products.splice(idx,1);
    });
  }

  save(){
    console.log(this.product);
  }

}
