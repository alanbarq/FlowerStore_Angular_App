import { EventEmitter, Injectable } from '@angular/core';
import { ListProducts } from 'src/app/models/products';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsSelectedService {
  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();


  constructor() { }
  changeParam(param:any){
    this.paramSource.next(param);
  }
}
