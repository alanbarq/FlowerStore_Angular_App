import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProducts } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { ProductsSelectedService } from 'src/app/services/observables/products-selected.service';
declare var jQuery:any;
declare var $:any;



@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {
  Products:ListProducts[];
  ProductsSelected:ListProducts[]= [];
  user_ID: string;

  constructor(private activarouter:ActivatedRoute,private api:ApiService, private router:Router,
    private productService:ProductsSelectedService) { }

  ngOnInit(): void {
    let id = this.activarouter.snapshot.paramMap.get('id');
    this.api.getProducts(id).subscribe(data =>{ console.log(data),
      this.Products = data;
    });

    $(function(){
      $('[data-toggle="popover"]').popover({
        delay:{
          "show":500,
          "hide":100

        }
      })
    });

    this.user_ID = localStorage.getItem("IdUser");
  }

  AddProduct(pr){
    alert("Product added to the cart");
    this.ProductsSelected.push(pr);
    console.log(this.ProductsSelected);
    //this.productService.changeParam(this.ProductsSelected);
    this.api.AddProductToFavs(pr,this.user_ID).subscribe(data =>{console.log(data)})

  }




}
