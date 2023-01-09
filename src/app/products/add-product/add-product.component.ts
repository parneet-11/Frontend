import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductForm:FormGroup;
  constructor(private productService:ProductServiceService, private router :Router){

  }
  ngOnInit(): void {
    this.addproductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      company:new FormControl('', Validators.required),
      model:new FormControl('', Validators.required),
      price:new FormControl('', Validators.required)
    });
  }

  onSubmit(form:FormGroup){
    this.productService.addProduct(form).subscribe(data=>{
      console.log(data)
    },errors=>{
      console.log(errors);
    });
    console.log(form);
    console.log(this.addproductForm)
    this.router.navigateByUrl('/app-product-card')

  }
}
