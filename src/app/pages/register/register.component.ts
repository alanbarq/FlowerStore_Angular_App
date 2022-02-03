import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {Users} from './users';
import { ApiService } from 'src/app/services/api/api.service';
import { SingleUserI } from 'src/app/models/single-user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validation = false;

  validationCondtions = false;
  user:Users;

  newUserForm = new FormGroup(
    {
      username: new FormControl('',Validators.minLength(6) && Validators.required),
      name: new FormControl('',Validators.required && Validators.minLength(2)),
      lastname:new FormControl('',Validators.minLength(2) && Validators.required),
      password: new FormControl('',Validators.minLength(6) && Validators.required),
      address: new FormControl('',Validators.minLength(6) && Validators.required),
      mail: new FormControl('',Validators.minLength(10) && Validators.required),
      telephone: new FormControl('',Validators.max(10) && Validators.required),
      Role: new FormControl(1)
    }
  );

  getValidation(event:Event){
    if(this.newUserForm.valid){
      if(this.validationCondtions != false){
        alert("User registered: Name: " + this.newUserForm.controls["name"].value + " Lastname: " + this.newUserForm.controls["lastname"].value);

        this.postForm(this.newUserForm.value);
        
        //this.router.navigate(['main'])
      }
      else{
        alert("Please accept our terms and conditions");
      }
        
    }

    else{
      alert("The user was not created");
    }
  }
  
  checkPassword(event:Event){
    if (this.newUserForm.controls["password"].value == (<HTMLInputElement>event.target).value){
      this.validation = true;
    }
  }
  toggleEditable(event) {
    if ( event.target.checked ) {
      this.validationCondtions = true;
       
   }
  }
  constructor(private router: Router, private apiservice:ApiService) { 

  }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [];
  agregarCaracteristica(newItem: string){
    this.arrayCaracteristicas.push(newItem)
  }

  postForm(form:SingleUserI){
    this.apiservice.postUser(form).subscribe(data => {})
  }

}
