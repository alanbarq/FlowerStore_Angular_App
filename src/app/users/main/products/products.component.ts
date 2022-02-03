import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Router } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { ListProductsFavs } from 'src/app/models/products-favs';
import { ApiService } from 'src/app/services/api/api.service';
import { ProductsSelectedService } from 'src/app/services/observables/products-selected.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ListaProducts: ListProductsFavs[] = [];
  promDiscount:number=0;

  message = "";
  registered = false;
  mail ="";
  cargo:string="";
  entradas: any[];
  titulo = "";
  totalPrice=0;
  hidden = false;
  hidden2 = false;
  promotionValid = false;
  promotionMail = false;
  total=0;
  user_id: string;
  

  registerUser(){
    this.registered=true;
    this.message = "User registered";
  }
  ChangeQuantity(id,id_user,id_product,event:any){
    console.log(id,id_user,id_product,event.target.value)
    this.api.editFavQuantity(id,id_user,id_product,Number(event.target.value)).subscribe(data => {console.log(data);
    window.location.reload()})
      

  }
  removeObject(id,id_user,id_product,quantity) {
    let data:Favorites = {'ID':id,'username_ID':id_user,'product_ID':id_product,'quantity':quantity};
    this.api.deleteFav(data,data.ID).subscribe(data=>{
      console.log(data);
      alert("Fav removed");
      window.location.reload();
    })



  }

  validateCode(event){
    if(this.promotionValid == true){
      alert("You already introduced a validated code");
    }
    else if(this.message.length==5){
      alert("Code validated");
      console.log(event);
      console.log(event.target);
      this.promotionValid  = true;
      this.totalPrice -= this.promDiscount;
      this.promDiscount=20;
    }
    else{
      alert("The code is incorrect");
    }
  }
  validateMail(event){
    if(this.promotionMail == true){
      alert("You already introduced a validated mail");
    }
    else if(this.mail.includes("@") && this.mail.length > 10){
      alert("Mail validated");
      console.log(event);
      console.log(event.target);
      this.promotionMail  = true;

      
    }
    else{
      console.log(this.ListaProducts);
      alert("The mail is incorrect");
    }
  }
  clickMethod(name: string) {
    if(confirm("Are you sure you want to accept the purchase")) {
      if(this.total <= 0){
        alert("Your cart is empty");
      }
      else{
        alert("Purchase accepted");
        this.router.navigate(['purchases'])
      }
    }
  }
  constructor(private router: Router, private productService: ProductsSelectedService,
    private api:ApiService) { 
  }

  ngOnInit(): void {
    // this.productService.sharedParam.subscribe(param => {this.ListaProducts = param;
    // });
    this.user_id = localStorage.getItem("IdUser")
    this.api.getFavsperUser(this.user_id).subscribe(data => {this.ListaProducts = data;
    this.ListaProducts.forEach(element => this.total += element.Price * element.Quantity);
    });
    
  }

}
