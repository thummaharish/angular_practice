import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList :any 

  categoryImages:any = ["../../../assets/category/all-products.png",
                        "../../../assets/category/electronics.png",
                        "../../../assets/category/jewellery.png",
                        "../../../assets/category/men.png",
                        "../../../assets/category/women.png"]

constructor(private api:ApiService, private router:Router){}

ngOnInit(): void {
  this.api.getCategories().subscribe(GetCategory=>{
    console.log('category list',GetCategory)
    this.categoryList = GetCategory
  })
}

}
