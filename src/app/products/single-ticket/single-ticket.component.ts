import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProducts } from 'src/app/models/products';
import { ListTicket } from 'src/app/models/tickets';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {
  TicketData:ListProducts[];
  
  constructor(private activarouter:ActivatedRoute, private router:Router,
    private apiService:ApiService) {}


  ngOnInit(): void {
    let id = this.activarouter.snapshot.paramMap.get('id');
    this.apiService.getSingleTicket(id).subscribe(data =>{ console.log(data),
      this.TicketData = data;
    });
  
  }

  returntoTickets(){
    this.router.navigate(['Tickets/1']);
    }
  }


