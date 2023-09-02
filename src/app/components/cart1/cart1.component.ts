import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cart1Service } from 'src/app/api/cart1.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {

  displayCart1Items: any = []
  count: number = 1
  deletedItem: any
  totalAmount:number = 0
  addressForm = false
  myForm !:FormGroup
  taxAmount:number = 0
  finalAmount:number = 0
  

  constructor(private cart1Api: Cart1Service, private FB:FormBuilder) { }

  ngOnInit(): void {
    this.addCartItems()

    this.myForm = this.FB.group({
      email:['', Validators.required],
      name:['', Validators.required],
      mobile:['', [Validators.required, Validators.maxLength(10)]],
      address:['', Validators.required]
    })

    // total amount
    this.totalAmount = this.cart1Api.calculateprice()
    console.log('the total price',this.totalAmount)

    // calculation of 15% taxation 
    this.taxAmount = this.totalAmount/100 * 15

    // *******final amount******

    this.finalAmount = this.totalAmount + this.taxAmount

    // ******* Sending final amount to order page component

    

    this.cart1Api.sendFinalAmount(this.finalAmount)

  }

 

  addCartItems(){
    this.cart1Api.products().subscribe(car1Items => {
      console.log('displayCart1Items', car1Items)
      this.displayCart1Items = car1Items
      this.totalAmount = this.cart1Api.calculateprice()
    })
  }

  deleteCartItem(item: any) {
   this.cart1Api.removeCartItem(item)
  // if (item >= 0 && item < this.displayCart1Items.length) {
  //   this.displayCart1Items.splice(item, 1);
  // }
  }

  checkout(){
    this.addressForm = true;
  }

  empty(){
    this.cart1Api.emptyCart()
  }

  // for form

  cancel(){
    this.addressForm = false
    this.myForm.reset()
    alert('Your order cancelled')
  }

  order(){
    this.myForm.value;
    console.log('my form values',this.myForm.value)
    localStorage.setItem('ecomdata',this.myForm.value.name)
    this.myForm.reset()
    
    alert('Your order confirmed')
  }


  inc() {
    if (this.count >= 0) {
      this.count++
    }
  }

  dec() {
    if (this.count > 0) {
      this.count--
    }
  }
}
