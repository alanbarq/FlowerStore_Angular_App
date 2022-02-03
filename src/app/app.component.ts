import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//header 

//clase vincula la vista a HTML


export class AppComponent {
  title = 'New code'; //properties
  get_name(): void{
    console.log("Hello World");
  }

}

//AQUÍ TAMBIÉN VAN LOS MÉTODOS 

