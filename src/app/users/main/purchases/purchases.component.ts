import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListProductsFavs } from 'src/app/models/products-favs';
import { ApiService } from 'src/app/services/api/api.service';
import { NavbarObsService } from 'src/app/services/observables/navbar-obs.service';
import { ProductsSelectedService } from 'src/app/services/observables/products-selected.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  ListaProducts: ListProductsFavs[] = [];
  datenow = new Date();
  total=0;
  user_id: string;
  id_ticket2: string;
  
  constructor(private router: Router, private productService: ProductsSelectedService,
    private api:ApiService, private dataService: NavbarObsService) { 
  }



  ngOnInit(): void {
    // this.productService.sharedParam.subscribe(param => {this.ListaProducts = param;
    // });
    this.user_id = localStorage.getItem("IdUser")
    this.api.getFavsperUser(this.user_id).subscribe(data => {this.ListaProducts = data;
    this.ListaProducts.forEach(element => this.total += element.Price * element.Quantity);

    });
    
  }

  
  createTicket() {
    if(this.newTicketForm.controls["deliveryAddress"].value.length <3){
      alert("That is not a valid address, pleasy try again");
    }
    else{
      if(this.CardForm.valid){
        alert("Purchase accepted");
        this.api.postTicket(this.newTicketForm.value).subscribe(data => {console.log(data);
          this.ListaProducts.forEach(element => this.api.publishPurchase(data.ID_ticket,element.Code_product,element.Quantity).subscribe(datos => {console.log(datos)}))
        });
      }
      else{
        alert("The info of the credit card is incorrect, please try again");
      }

        
      
     
   }
    
  }

  newTicketForm = new FormGroup(
    {

      Ticket: new FormControl(this.getRandomString(7)),
      datetime: new FormControl(Date()),
      deliveryAddress:new FormControl('',Validators.minLength(2) && Validators.required),
      ID_user: new FormControl(localStorage.getItem("IdUser"))
    })

    CardForm = new FormGroup(
      {
  
        CC: new FormControl('',Validators.required && Validators.minLength(16) && Validators.maxLength(16) && Validators.pattern("^[0-9]*$")),
        nameCard: new FormControl('',Validators.minLength(2) && Validators.required ),
        CVV:new FormControl('',Validators.minLength(3) && Validators.maxLength(3) && Validators.required && Validators.pattern("^[0-9]*$")),
        date: new FormControl('',Validators.required && Validators.minLength(4) && Validators.maxLength(5) && Validators.pattern("^[0-9]*$"))
      })

    getRandomString(length) {
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';
      for ( var i = 0; i < length; i++ ) {
          result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      return result;
  }

}
