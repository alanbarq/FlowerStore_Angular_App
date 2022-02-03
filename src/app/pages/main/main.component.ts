import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListProducts } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { ProductsSelectedService } from 'src/app/services/observables/products-selected.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listProducts:ListProducts[] = [];
  ProductsSelected:ListProducts[]= [];
  

  SearchForm = new FormGroup({
    value : new FormControl('',Validators.required && Validators.minLength(3))
  })

  constructor(private api:ApiService, private productService:ProductsSelectedService) { }

  ngOnInit(): void {
  }
  searchForAProduct(){
    this.api.searchForAProduct(this.SearchForm.controls["value"].value).subscribe((data:any) => {
      if (data == "The product does not exist"){
        alert("We do not have that product in our stock");
      }
      
      else{
        this.listProducts = data;
        alert("There is a match");


      }

    
    });
  }

  AddProduct(pr){
    alert("Product added to the cart");
    this.ProductsSelected.push(pr);
    console.log(this.ProductsSelected);
    this.productService.changeParam(this.ProductsSelected);
  }
  

}
