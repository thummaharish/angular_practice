import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart1Service } from 'src/app/api/cart1.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  totalAmount:number = 0
  grandTotal :number = 0
  username !:string 

  constructor(private cart1Api:Cart1Service, private router:Router){}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/view-all-products'])
      this.cart1Api.emptyCart()
      localStorage.removeItem('ecomdata')

    }, 4000);

    // total amount comming from api
    this.totalAmount = this.cart1Api.calculateprice()

    // recieving final amount

    this.grandTotal = this.cart1Api.recieveFinalAmount()

    // getting item from local storage

    let localUserName = localStorage.getItem('ecomdata')
    this.username = JSON.parse(JSON.stringify(localUserName))
  }
}
