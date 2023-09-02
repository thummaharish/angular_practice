import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pipe } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { Cart1Service } from 'src/app/api/cart1.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
viewId :any
viewProduct :any 

showAdd:boolean = true
showRemove:boolean = false



  constructor(private activatedRoute:ActivatedRoute, private api:ApiService,
              private cart1Api:Cart1Service){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(id=>{
    
      console.log('view data id',id)
      this.viewId = id['viewId']
      this.viewData()
    }) 
  }

  viewData(){
    this.api.getAllProductsById(this.viewId).subscribe(data=>{
      console.log('id', data)
      this.viewProduct = data
    })
  }

  // addToCart(viewProduct:any){
  //   this.cartApi.addCartItems(viewProduct)
  // }

  addToCart(item:any){
    this.cart1Api.ApiAddToCart(item)
    this.showRemove = true
    this.showAdd = false
  }

  removeItemFromCart(viewProduct:any){
    this.cart1Api.removeCartItem(viewProduct)
    this.showAdd = true
    this.showRemove = false
  }
}
 
 



