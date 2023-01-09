import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateproductForm:FormGroup;
  productId:number;
  constructor(private productService:ProductServiceService, private router :Router, private route:ActivatedRoute){

  }
  ngOnInit(): void {

    this.updateproductForm = new FormGroup({
      id:new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      company:new FormControl('', Validators.required),
      model:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required)
    });

    this.productId= this.route.snapshot.params['id'];
  }

  onSubmit(form:FormGroup){
    this.productService.updateProduct(this.productId,form).subscribe(data=>{
      console.log(data);
    },errors=>{
      console.log(errors);
    });
    console.log(form);
    console.log(this.updateproductForm)
    this.router.navigateByUrl('/app-product-card')

  }
}
