import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProducts } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  Products:ListProducts[];

  constructor(private activarouter:ActivatedRoute,private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    let id = this.activarouter.snapshot.paramMap.get('id');
    this.api.getProducts(id).subscribe(data =>{ console.log(data),
      this.Products = data;
    });
  }

  editProduct(name){
    this.router.navigate(['details',name]);
  }

  newProduct(){
    this.router.navigate(['newProduct']);
  }

}
