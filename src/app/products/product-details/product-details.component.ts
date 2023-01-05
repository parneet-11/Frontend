import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number;
  Product:any;
  constructor(private route:ActivatedRoute, private productService:ProductServiceService){

  }
  ngOnInit(): void {
    this.productId= this.route.snapshot.params['id'];
    console.log(this.productId);
    this.displayProducts();
  }

  displayProducts(){
    this.productService.getProductById(this.productId).subscribe(data=>{
      console.log(data);
      this.Product=data;
    },
    error=>{
      console.log(error);
    })
  }

}
