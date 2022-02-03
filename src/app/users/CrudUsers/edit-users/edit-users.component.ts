import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { ListUsersI } from 'src/app/models/users.interface';
import { ApiService } from 'src/app/services/api/api.service'; 
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor(private activarouter:ActivatedRoute, private router:Router,
                private apiService:ApiService) {}

  dataUser:ListUsersI;
  editForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    mail: new FormControl(''),
    telephone: new FormControl(''),
    ID_user : new FormControl(''),
    Role: new FormControl(''),
  });
                
  ngOnInit(): void {
    let userID = this.activarouter.snapshot.paramMap.get('id');
    this.apiService.getSingleUser(userID).subscribe(data =>{
                                                    this.dataUser =data
                                                    this.editForm.setValue({
                                                      'username':this.dataUser.username,
                                                      'name':this.dataUser.name,
                                                      'lastname': this.dataUser.lastname,
                                                      'password':this.dataUser.password,
                                                      'address':this.dataUser.address,
                                                      'mail':this.dataUser.mail,
                                                      'telephone':this.dataUser.telephone,
                                                      'ID_user':this.dataUser.ID_user,
                                                      'Role':this.dataUser.Role,
                                                    })
    })
    console.log(userID);

  }

  postForm(form:ListUsersI){
    this.apiService.putUser(form,form.ID_user).subscribe(data =>{
      console.log(data)
      alert("User saved");
      this.router.navigate(['GetUsers']);
    })
  }

  deleteUser(){
    let data:ListUsersI = this.editForm.value;
    this.apiService.deleteUser(data,data.ID_user).subscribe(data=>{
      console.log(data);
      alert("User removed");
      this.router.navigate(['GetUsers']);
    })
  }

  returntoGet(){
    this.router.navigate(['GetUsers']);
  }
}
