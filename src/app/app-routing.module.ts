import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { FirstPageComponent } from './users/main/first-page/first-page.component';
import { ProductsComponent } from './users/main/products/products.component';
import { PurchasesComponent } from './users/main/purchases/purchases.component';
import { ListProductsComponent } from './users/main/list-products/list-products.component';
import { GetUsersComponent } from './users/CrudUsers/get-users/get-users.component';
import { EditUsersComponent} from './users/CrudUsers/edit-users/edit-users.component';
import { GetProductsComponent } from './products/get-products/get-products.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { DetailsComponent } from './products/details/details.component';
import { MainPageComponent } from './users/CrudUsers/main-page/main-page.component';
import { TicketsComponent } from './products/tickets/tickets.component';
import { SingleTicketComponent } from './products/single-ticket/single-ticket.component';
import { RetrieveDataComponent } from './pages/retrieve-data/retrieve-data.component';
import { AddUserComponent } from './users/CrudUsers/add-user/add-user.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'main', component:MainComponent},
  {path:'init',component:FirstPageComponent},
  {path:'Cart',component:ProductsComponent},
  {path:'purchases',component:PurchasesComponent},
  {path:'AddProduct',component:ListProductsComponent},
  {path:'GetUsers',component:GetUsersComponent},
  {path:'Products/:id',component:GetProductsComponent},
  {path:'editUser/:id', component:EditUsersComponent},
  {path:'editProduct/:id',component:EditProductsComponent},
  {path:'details/:name',component:DetailsComponent},
  {path:'pageSuperUser',component:MainPageComponent},
  {path:'Tickets/:id',component:TicketsComponent},
  {path:'TicketInformation/:id', component:SingleTicketComponent},
  {path:'rememberUsername',component:RetrieveDataComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'**', redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,MainComponent,FirstPageComponent,
ProductsComponent,PurchasesComponent,ListProductsComponent]