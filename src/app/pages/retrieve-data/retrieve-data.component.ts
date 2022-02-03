import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrieve-data',
  templateUrl: './retrieve-data.component.html',
  styleUrls: ['./retrieve-data.component.css']
})
export class RetrieveDataComponent implements OnInit {
  mailForm = new FormGroup({
    mail : new FormControl('',Validators.required && Validators.min(8) && Validators.email)
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Open(){
    if (this.mailForm.valid){
    alert("Instructions to remember your password were sent to " + this.mailForm.controls['mail'].value + ", please check it");
    this.router.navigate(['login']);
    }
    else{
      alert("That is not a valid mail, please try again");
    }
  }
}
