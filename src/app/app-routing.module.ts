import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewAllProductsComponent } from './components/view-all-products/view-all-products.component';
import { ViewProductByCategoryComponent } from './components/view-product-by-category/view-product-by-category.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Cart1Component } from './components/cart1/cart1.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'login'},
{path:'view-all-products', component:ViewAllProductsComponent},
{path:'category',component:HomeComponent},
{path:'view-product-by-category/:category',component:ViewProductByCategoryComponent
// children:[{path:'view-details/:viewId',component:ViewDetailsComponent}]
},
{path:'view-details/:viewId',component:ViewDetailsComponent},
{path:'login',component:LoginComponent},
{path:'sign-up', component:SignupComponent},
{path:'cart1',component:Cart1Component},
{path:'order-page', component:OrderPageComponent},
{path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
