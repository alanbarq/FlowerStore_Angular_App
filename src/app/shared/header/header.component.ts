import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarObsService } from 'src/app/services/observables/navbar-obs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title;
  user;
  show: boolean;
  
  constructor(private router: Router, private Obs1: NavbarObsService) { 
    this.title = "Spencers";
  }

  ngOnInit(): void {
    this.Obs1.name$.subscribe(status => {
      this.show = status;
      console.log(status);
    })
    this.Obs1.user$.subscribe(username =>{
      this.user = username;
    })
  }

  logOut(){

      console.log(localStorage.getItem("User"));
      localStorage.setItem('Token_Auth',null);
      localStorage.setItem("User",null);
      localStorage.setItem("UserRole",null);
      localStorage.setItem("IdUser",null);
      alert("Correct logout")
      this.router.navigate(['login']);
      this.show = false;
  }


}
