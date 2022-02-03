import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  name = "";
  lastname = "Barlandas";
  age= 25;
  bussiness= "aspire systems";
  constructor() { }
  getEdad(){
    return this.age;
  }
  callBussiness(value:String){
    alert("Hola mundo");
  }

  changeName(event:Event){
    this.name=(<HTMLInputElement>event.target).value;
  }

  ableSquare = true;
  userRegistered = false;
  getRegistered(event:Event){
    if(this.name == "Shaina"){
      this.userRegistered = true;
      this.textoDeRegistro = "Usuario registrado";
    }
    else{
      alert("The user is not registered ");
    }
  } 

  textoDeRegistro="No hay nadie registrado";

  ngOnInit(): void {
  }

}
