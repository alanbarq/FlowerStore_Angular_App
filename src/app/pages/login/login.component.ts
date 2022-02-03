import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../register/users';
import {ApiService} from '../../services/api/api.service';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarObsService } from 'src/app/services/observables/navbar-obs.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  private readonly TOKEN_NAME = 'Token_Auth';
  users: Users[];

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  onLogin(form:LoginI){
    this.api.loginByUsername(form).subscribe(data =>{
                                                      let dataResponse:ResponseI = data;
                                                      console.log(dataResponse);
                                                      if (dataResponse.UserRole == "User" || dataResponse.UserRole == "Administrator"){
                                                        localStorage.setItem(this.TOKEN_NAME,dataResponse.Token);
                                                        localStorage.setItem("User",dataResponse.User);
                                                        localStorage.setItem("UserRole",dataResponse.UserRole);
                                                        localStorage.setItem("IdUser",dataResponse.IdUser);
                                                        alert("Correct login");
                                                        alert("Welcome back: " + this.loginForm.controls["username"].value);
                                                        this.router.navigate(['GetUsers'])
                                                        this.dataService.name$.emit(true);
                                                        this.dataService.user$.emit(localStorage.getItem("User"));                                               
                                                        if(dataResponse.UserRole == "User"){
                                                          this.router.navigate(['main'])
                                                        }
                                                        else{
                                                          this.router.navigate(['pageSuperUser'])
                                                        }
                                                        

                                                      }else if(dataResponse.UserRole == "Unauthorized"){
                                                        this.status = true;
                                                      }
  })
  }
  get getToken(){
    return localStorage.getItem(this.TOKEN_NAME);
  }



  constructor(private router: Router,private api:ApiService, private dataService:NavbarObsService ) {
    
  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }
  checkLocalStorage(){
    if(localStorage.getItem(this.TOKEN_NAME)){
      this.router.navigate(['GetUser']);
    }
  }


}
