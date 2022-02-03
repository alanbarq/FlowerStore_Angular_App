import { Component, OnInit } from '@angular/core';
import { NavbarObsService } from 'src/app/services/observables/navbar-obs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  show:boolean = false;

  constructor(private Obs1:NavbarObsService) { }

  ngOnInit(): void {
    this.Obs1.name$.subscribe(status => {
      this.show = status;
    })
  }
  

}
