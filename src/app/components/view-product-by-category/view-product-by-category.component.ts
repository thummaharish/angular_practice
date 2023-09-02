import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { Cart1Service } from 'src/app/api/cart1.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
categoryId : number = 0
productByCategory !:any

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService,
              private car1Api:Cart1Service){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(catId=>{
      console.log('activated route =',catId)
      this.categoryId = catId['category']
      this.displayProductByCategory()
    })

    
 
  }

  displayProductByCategory(){
   this.api.byCategory(this.categoryId).subscribe(catProduct=>{
    console.log('product By category',catProduct)
    this.productByCategory = catProduct
   })
  }

  addToCart(product:any){
    this.car1Api.ApiAddToCart(product)
    }



  // addToCart(product:any){
  //   this.cartApi.addCartItems(product)
  // }

  }




