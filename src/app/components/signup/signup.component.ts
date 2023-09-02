import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signUpForm !: FormGroup
dataPost:any

constructor(private FB:FormBuilder, private api:ApiService, private router:Router){}

ngOnInit(): void {
this.signUpForm = this.FB.group({
  name:['',Validators.required],
  email:['',[Validators.email,Validators.required]],
  password:['',Validators.required]
})
  
}

SignUp(){
  this.api.postSignUp(this.signUpForm.value).subscribe(postData=>{
    console.log('post data',postData)

    this.dataPost = postData

    localStorage.setItem('signupdata',JSON.stringify(this.dataPost))

    

    if(this.dataPost.name ==='' || this.dataPost.email ==='' || this.dataPost.password ==='' ){
      alert('enter valid details')
    }else{
      alert('Details added successfully')
    this.router.navigate(['/login'])
    }



    // this.dataPost=postData

    // if(this.signUpForm.value.email === this.dataPost.email){
    //   alert('this details are already existed')
    // }else{
    //   alert('navigate to products component')
    // this.router.navigate(['view-all-products'])
    // }
    
  })
}

}
