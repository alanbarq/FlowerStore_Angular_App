import { Injectable } from '@angular/core';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListUsersI } from 'src/app/models/users.interface';
import { SingleUserI } from 'src/app/models/single-user';
import { identifierName } from '@angular/compiler';
import { ListProducts } from 'src/app/models/products';
import { ListTicket } from 'src/app/models/tickets';
import { Favorites } from 'src/app/models/favorites';
import { Products } from 'src/app/users/main/products';
import { ListProductsFavs } from 'src/app/models/products-favs';
import { Purchase } from 'src/app/models/purchase';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://localhost:44367/api/"

  constructor(private http:HttpClient) {}

  loginByUsername(form:LoginI):Observable<ResponseI>{
    let path = this.url + "Users";
    return this.http.post<ResponseI>(path,form);
    
  }

  getAllUsers():Observable<ListUsersI[]>{
    let path = this.url + "Users";
    return this.http.get<ListUsersI[]>(path);
  }

  getProducts(id):Observable<ListProducts[]>{
    let path = this.url + "Products?category="+id;
    return this.http.get<ListProducts[]>(path);
  }

  getSingleUser(id):Observable<ListUsersI>{
    let path = this.url + "Users/" + id;
    return this.http.get<ListUsersI>(path);
  }

  putUser(form:ListUsersI, id):Observable<ListUsersI>{
    let path = this.url + "Users/" + id;
    return this.http.put<ListUsersI>(path,form)
  }

  deleteUser(form:ListUsersI,id): Observable<ListUsersI>{
    let path = this.url + "Users/" + id;
    let Options = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      body:form
    }
    return this.http.delete<ListUsersI>(path,Options);
  }

  postUser(form:SingleUserI):Observable<SingleUserI>{
    let path = this.url + "Users/addNewUser";
    return this.http.post<SingleUserI>(path,form);
  }

  //Products methods
  getSingleProduct(name):Observable<ListProducts>{
    let path = this.url + "Products?nameProduct=" + name;
    return this.http.get<ListProducts>(path);
  }

  searchForAProduct(name):Observable<any>{
    let path = this.url + "Products/Search?product_search=" + name;
    return this.http.get<any>(path);

  }

  putProduct(form:ListProducts, id):Observable<ListProducts>{
    let path = this.url + "Products/" + id;
    return this.http.put<ListProducts>(path,form)
  }

  deleteProduct(form:ListProducts,id): Observable<ListProducts>{
    let path = this.url + "Products/" + id;
    let Options = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      body:form
    }
    return this.http.delete<ListProducts>(path,Options);
  }

  //Tickets methods
  getTicketsperUser(id_user):Observable<ListTicket[]>{
    let path = this.url + "Ticket/?user=" + id_user;
    return this.http.get<ListTicket[]>(path);
  }

  getSingleTicket(id_ticket):Observable<ListProducts[]>{
    let path = this.url + "Ticket?ticket="+id_ticket;
    return this.http.get<ListProducts[]>(path);
  }

  postTicket(form:ListTicket):Observable<ListTicket>{
    let path = this.url + "Ticket/";
    return this.http.post<ListTicket>(path,form);
  }

  publishPurchase(id_ticket,code_product,quantity):Observable<Purchase>{
    let path = this.url +"Purchases/";
    return this.http.post<Purchase>(path,{'ID_ticket':id_ticket,'Code_product':code_product,'quantity':quantity});  
  }




  //Favorites methods
  //POST
  AddProductToFavs(id_product,id_user):Observable<Favorites>{
    let path = this.url + "Favorites";
    return this.http.post<Favorites>(path,{'username_ID':id_user,'product_ID':id_product,'quantity':1});
  }
  //Get favorites by ID
  getFavsperUser(id_user):Observable<ListProductsFavs[]>{
    let path = this.url + "Favorites/Search?id=" + id_user;
    return this.http.get<ListProductsFavs[]>(path);
  }
  //Edit Quantity
  editFavQuantity(id,id_user,id_product,quantity):Observable<Favorites>{
    let path = this.url + "Favorites/" + id;
    return this.http.put<Favorites>(path,{'ID':id,'username_ID':id_user,'product_ID':id_product,'quantity':quantity});
  }

  deleteFav(form:Favorites,id): Observable<Favorites>{
    let path = this.url + "Favorites/" + id;
    let Options = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      body:form
    }
    return this.http.delete<Favorites>(path,Options);
    
  }

}
