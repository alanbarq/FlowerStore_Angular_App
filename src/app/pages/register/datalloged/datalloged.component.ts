import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Users } from '../users';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datalloged',
  templateUrl: './datalloged.component.html',
  styleUrls: ['./datalloged.component.css']
})
export class DatallogedComponent implements OnInit {

  @Input() userFormUsed:FormGroup;
  @Input() usuario:Users;
  @Output() CaracteristicasEmpleados = new EventEmitter<string>();
  constructor() { }

  addNewCaracteristica(newItem:string){
    this.CaracteristicasEmpleados.emit(newItem);
  } //Lanza valor 

  ngOnInit(): void {
  }

}
