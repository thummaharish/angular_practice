import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories")
  }
  
  viewAllProducts(){
    return this.http.get("https://fakestoreapi.com/products")
  }

  byCategory(cat:number){
    return this.http.get('https://fakestoreapi.com/products/category/'+cat)
  }

  postSignUp(data:any){
   return this.http.post('http://localhost:3000/signup',data)
  }

  GetLogin(){
    return this.http.get('http://localhost:3000/signup')
  }

  viewDetails(cat:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+cat)
  }

  getAllProductsById(id:string){
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}
