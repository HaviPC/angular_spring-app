import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Http } from '@angular/http';
import { product } from "./product";
import { HttpClient } from '@angular/common/http';
import { Myservice } from "./myservice.service";
import { user } from "./user";
import { cart } from "./cart";
@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: product[] = [];
  cart = new cart();
  carts: cart[]=[];
  counts = {};

  constructor(private Http: HttpClient, private myservice: Myservice) { }

  ngOnInit() {
    this.Http.get<product[]>("http://localhost:8081/dashboard").subscribe(res => {
      this.products = res;
    })
    this.Http.get<cart[]>("http://localhost:8081/").subscribe(res => {
      this.carts = res;
    })


  }
  myFunction(product: product) {
    if (this.counts[product.productId]) {
      if (this.counts[product.productId] < 5) {
        this.counts[product.productId] = this.counts[product.productId] + 1;
      }
    } else {
      this.counts[product.productId] = 1;
    }
 console.log(this.counts)
    this.Http.post("http://localhost:8081/dashboard",  {
    
      quantity: this.counts[product.productId],
      customer: this.myservice.user,
      product: product,
      email:this.myservice.user_email
    }).subscribe(res => {

    //this.Http.get<cart[]>("http://localhost:8081/").subscribe(res => {
      //this.carts = res;
   // })


if((this.counts[product.productId])<5){
alert("inserted successfully")
 
}
else{
  alert("no")
}
    });

  }
  

  myFunction2(product: product) {
  
    this.counts[product.productId]--;

    console.log(this.counts)
    this.Http.post("http://localhost:8081/dashboard", {
       quantity: this.counts[product.productId],
      customer: this.myservice.user,
      product: product,
      email:this.myservice.user_email
    }).subscribe();






}
 

}