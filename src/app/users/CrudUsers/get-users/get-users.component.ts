import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router} from '@angular/router';
import { ListUsersI } from 'src/app/models/users.interface';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  Users:ListUsersI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data =>{ console.log(data),
      this.Users = data;
    });
  }

  editUser(id){
    this.router.navigate(['editUser',id]);
  }

  newUser(){
    this.router.navigate(['addUser']);
  }
  BackToMenu(){
    this.router.navigate(['pageSuperUser']);
  }
  

}
