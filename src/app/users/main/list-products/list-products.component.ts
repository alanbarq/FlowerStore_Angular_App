import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  validation = false;
  category = "flowers";
  product:Products;

  productsForm = new FormGroup(
    {
      id: new FormControl('',Validators.required && Validators.minLength(3)),
      name:new FormControl('',Validators.minLength(3) && Validators.required),
      price: new FormControl(0,Validators.required),
      description: new FormControl('',Validators.minLength(3) && Validators.required)
    }
  );

  getValidation(event:Event){
    if(this.productsForm.valid && this.category != ""){

        alert("The product was added correctly");
        alert(this.productsForm.controls["name"].value);
        this.createProducts();
        this.router.navigate(['main'])
    }else{
        alert("The product was not added, please check it again");
      }
  }


  createProducts(){
    let newProduct = new Products(
      this.productsForm.controls["id"].value,
      this.productsForm.controls["name"].value,
      this.category,
      this.productsForm.controls["price"].value,
      this.productsForm.controls["description"].value,
      );
    this.product = newProduct;
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
