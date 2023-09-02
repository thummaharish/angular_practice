import { Component, OnInit } from '@angular/core';

import { Cart1Service } from 'src/app/api/cart1.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
// homeCartItems :any = []

public cartItems:number = 0
constructor( private cart1Api:Cart1Service){}

ngOnInit(): void {
// this.homeCartItems = this.getCartCount()
//  console.log('home cart Items',this.homeCartItems)

 this.cart1Api.products().subscribe(res=>{
  this.cartItems = res.length
 })
 
}
// getCartCount(){
//   return this.cartApi.getCartItems()
// }

}
