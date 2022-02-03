import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProducts } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(private activarouter:ActivatedRoute, private router:Router,
    private apiService:ApiService) {}

  dataProduct:ListProducts;
    editProductsForm = new FormGroup({
      Code_product: new FormControl(''),
      Name: new FormControl(''),
      Price: new FormControl(''),
      Description: new FormControl(''),
      ID_Category: new FormControl(''),
      ID: new FormControl(''),
    });
    
  ngOnInit(): void {
    let productname = this.activarouter.snapshot.paramMap.get('name');
    console.log(productname);
    this.apiService.getSingleProduct(productname).subscribe(data =>{
                                            this.dataProduct =data
                                            this.editProductsForm.setValue({
                                              'Code_product':this.dataProduct.Code_product,
                                              'Name':this.dataProduct.Name,
                                              'Price': this.dataProduct.Price,
                                              'Description':this.dataProduct.Description,
                                              'ID_Category':this.dataProduct.ID_Category,
                                              'ID':this.dataProduct.ID,
                                            })

  })

  }

  postFormProduct(form:ListProducts){
    this.apiService.putProduct(form,form.ID).subscribe(data =>{
    alert("Product saved");
    this.router.navigate(['editProduct/'+this.editProductsForm.controls['ID_Category'].value]);
    })
  }

  deleteProduct(){
    let data:ListProducts = this.editProductsForm.value;
    this.apiService.deleteProduct(data,data.ID).subscribe(data=>{
    alert("Product removed");
    this.router.navigate(['editProduct/'+this.editProductsForm.controls['ID_Category'].value]);
    })
  }

  returntoProducts(){
    console.log(+this.editProductsForm.controls['ID_Category'].value);
    this.router.navigate(['editProduct/'+this.editProductsForm.controls['ID_Category'].value]);
    }
  }

