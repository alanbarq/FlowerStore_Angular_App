import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SingleUserI } from 'src/app/models/single-user';
import { Users } from 'src/app/pages/register/users';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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

  getValidation(form_values){
    if(this.newUserForm.valid){
        if(this.validation != false){
        alert("New user registered: Name: " + this.newUserForm.controls["name"].value + " Lastname: " + this.newUserForm.controls["lastname"].value);

        this.postForm(form_values);
        
        this.router.navigate(['GetUsers'])
      }else{
        alert("The password is incorrect, please try again");
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
  
  constructor(private router: Router, private apiservice:ApiService) { 

  }

  ngOnInit(): void {
  }


  postForm(form:SingleUserI){
    alert("User created");
    this.apiservice.postUser(form).subscribe(data => {console.log(data)})
  }

  returntoGet(){
    this.router.navigate(['GetUsers']);
  }

}
