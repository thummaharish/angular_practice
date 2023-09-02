import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  user: any
  loginData: any
  localdata:any

  constructor(private FB: FormBuilder, private api: ApiService, private router: Router, 
              private _http: HttpClient) { }


  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


                 // first way for login here**** we are using json server *****
    //________________________________________________________________________________________________________


  logIn() {
    this._http.get('http://localhost:3000/signup').subscribe(loginRes => {
      console.log('login details', JSON.stringify(loginRes))

      this.loginData = JSON.stringify(loginRes)

      const loginUser = JSON.parse(this.loginData).find((a: any) =>
        a.email === this.loginForm.value.email && a.password === this.loginForm.value.password)

      if (loginUser) {
        alert('log in successs full')
        this.router.navigate(['/view-all-products'])
      } else {
        alert('The login details are not matched')
      }

    })
  }

                  // second way for login here**** we are using LOCAL STORAGE DATA ***** is pending
    //________________________________________________________________________________________________________

  

  // logIn(){

  // this.localdata = localStorage.getItem('signupdata')

  //   console.log('login local data', JSON.parse(this.localdata))


  //   const loginUser = JSON.parse(this.localdata).find((a: any) =>
  //     a.email === this.loginForm.value.email && a.password === this.loginForm.value.password)

  //   if (loginUser) {
  //     alert('log in successs full')
  //     this.router.navigate(['/view-all-products'])
  //   } else {
  //     alert('The login details are not matched')
  //   }
  // }

    // ***************************************************************************************
    // this.api.GetLogin().subscribe(res => {


    //   console.log('user Details=',res)

    //   if (this.user.email === this.loginForm.value.email && this.user.password === this.loginForm.value.password) {
    //     alert('log in successs full')

    //     this.router.navigate(['view-all-products'])
    //   } else {
    //     alert('The login details are not matched')
    //   }
    // ***************************************************************************************

    // for (let stu of this.user) {
    //   const itemIdToFind = stu.id

    //   const foundItem = this.user.find((a: any) => a.id === itemIdToFind && a.email === this.loginForm.value.email
    //     && a.password === this.loginForm.value.password);

    //   if (foundItem) {
    //     alert('log in successs full')

    //     this.router.navigate(['view-all-products'])
    //   }else{
    //         alert('The login details are not matched')
    //       }
    // }
    // ***************************************************************************************

    // const itemIdToFind = this.user.findIndex(data=>);


    // if (foundItem) {
    //   console.log('Item found:', foundItem);
    // } else {
    //   console.log('Item not found');
    // }


    // const arrayOfIds = this.user.find((obj:any) => {
    //   if( obj.email === this.loginForm.value.email && obj.password === this.loginForm.value.password ){
    //         alert('log in successs full')
    //         this.router.navigate(['view-all-products'])
    //       }

    // });

    // console.log('user log in details',arrayOfIds)
    // for(const item of this.user){
    //   console.log('item of user',item)
    //   if( item.email === this.loginForm.value.email && item.password === this.loginForm.value.password ){
    //     alert('log in successs full')
    //     this.router.navigate(['view-all-products'])
    //   }else{
    //     alert('The login details are not matched')
    //   }
    // }
    //   })

  }

  


