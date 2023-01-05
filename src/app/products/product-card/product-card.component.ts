import { HttpClient } from '@angular/common/http';
import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  Product:any
  productId:number;

  constructor( private http:HttpClient, private productService:ProductServiceService){

  }
  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.Product=data;
    },
    error=>{
      console.log(error);
    })
  }

  onDelete(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    },
    errors=>{
      console.log(errors);
    })
  }

}
