import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingModule } from 'ng-starrating';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { ViewProductByCategoryComponent } from './components/view-product-by-category/view-product-by-category.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Cart1Component } from './components/cart1/cart1.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryListComponent,
    ViewAllProductsComponent,
    ViewProductByCategoryComponent,
    ViewDetailsComponent,
    LoginComponent,
    SignupComponent,
    Cart1Component,
    OrderPageComponent,
    DashboardComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 