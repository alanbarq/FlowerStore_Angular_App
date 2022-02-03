import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarObsService {
  // new event emmiter
  name$ = new EventEmitter<boolean>();
  user$ = new EventEmitter<string>();
  ticket$ = new EventEmitter<any>();

  constructor() { }
}
