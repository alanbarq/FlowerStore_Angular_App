import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListTicket } from 'src/app/models/tickets';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  userId;
  TicketList: ListTicket[];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("IdUser")
    this.api.getTicketsperUser(this.userId).subscribe(data =>{ console.log(data),
      this.TicketList = data;
      
    });
  }

  detailsTicket(id){
    this.router.navigate(['TicketInformation',id]);
  }

}
  
