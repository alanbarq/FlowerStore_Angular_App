import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user:string;
  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("User");
  }
}
