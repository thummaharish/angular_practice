import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { Cart1Service } from 'src/app/api/cart1.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  allProductsList: any;
  allId !: string
  showAdd = true

  constructor(private api: ApiService, private activateRoute: ActivatedRoute,
              private cart1Api:Cart1Service) { }

  ngOnInit(): void {
    this.api.viewAllProducts().subscribe(AllProducts => {
      this.allProductsList = AllProducts
    })

    this.activateRoute.params.subscribe(id => {
      this.allId = id['viewId']
    })


  }

  // addToCart(x: any) {
  //   this.cartApi.addCartItems(x)
  // }

  addToCart(item:any){
    this.cart1Api.ApiAddToCart(item)
    this.showAdd = false
    console.log('add item',item)
  }

  

}




