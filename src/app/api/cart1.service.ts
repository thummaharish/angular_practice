import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cart1Service {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])
  amount:number = 0


  constructor() { }

  ApiAddToCart(data: any) {
    this.cartItemList.push(data)
    this.productList.next(this.cartItemList)
    console.log('push cart list =', this.cartItemList)
    console.log('cart item list from cart1 service', this.cartItemList)
  }

  products() {
    return this.productList.asObservable();
  }

  removeCartItem(data: any) {
    // this.cartItemList.map((a:any,index:number)=>{
    //   // if(data.id === a.id){
    //   //   this.cartItemList.splice(index,1)
    //   // }
    // })

    const indexToRemove = this.cartItemList.findIndex((item: any) => item.id === data.id);
    console.log('indext to remove =', indexToRemove)
    if (indexToRemove !== -1) {
      this.cartItemList.splice(indexToRemove, 1);
    }

    this.productList.next(this.cartItemList)
  }

  // total calculation

  calculateprice(){
    let total = 0
    this.cartItemList.map((a:any)=>{
      total += a.price
    })
    return total
  }

  // passing data from one component(cart1 component) to other component(order page component)

    sendFinalAmount(data:number){
      this.amount = data
    }
  // recive final amount

    recieveFinalAmount(){
      return this.amount
    }


  // empty cart

  emptyCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }

  




}
