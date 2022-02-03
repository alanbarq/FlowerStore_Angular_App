import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { MainModule } from './users/main/main.module';
import { FirstPageComponent } from './users/main/first-page/first-page.component';
import { ProductsComponent } from './users/main/products/products.component';
import { PurchasesComponent } from './users/main/purchases/purchases.component';
import { ListProductsComponent } from './users/main/list-products/list-products.component';

import { DatallogedComponent } from './pages/register/datalloged/datalloged.component';
import {HttpClientModule} from '@angular/common/http';
import { GetUsersComponent } from './users/CrudUsers/get-users/get-users.component';
import { EditUsersComponent } from './users/CrudUsers/edit-users/edit-users.component';
import { GetProductsComponent } from './products/get-products/get-products.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';
import { DetailsComponent } from './products/details/details.component';
import { MainPageComponent } from './users/CrudUsers/main-page/main-page.component';
import { TicketsComponent } from './products/tickets/tickets.component';
import { SingleTicketComponent } from './products/single-ticket/single-ticket.component';
import { RetrieveDataComponent } from './pages/retrieve-data/retrieve-data.component';
import { AddUserComponent } from './users/CrudUsers/add-user/add-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FirstPageComponent,
    ProductsComponent,
    PurchasesComponent,
    ListProductsComponent,
    DatallogedComponent,
    GetUsersComponent,
    EditUsersComponent,
    GetProductsComponent,
    EditProductsComponent,
    DetailsComponent,
    MainPageComponent,
    TicketsComponent,
    SingleTicketComponent,
    RetrieveDataComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MainModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
