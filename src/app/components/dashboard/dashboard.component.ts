import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart1Service } from 'src/app/api/cart1.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cartItems: number = 0
  dropDownItems :any
  loginData:any

   
  constructor(private cart1Api: Cart1Service, private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.cart1Api.products().subscribe(res => { 
      this.cartItems = res.length 
      this.dropDownItems = res
    })

    this._http.get('http://localhost:3000/signup').subscribe(loginRes => {
      console.log('login details', JSON.stringify(loginRes))

      this.loginData = JSON.stringify(loginRes)

    })

}

products(){
  this.router.navigate(['/view-product-by-category/:category'])
}
}

