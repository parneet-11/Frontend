import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  Product:any={
   "Name":"parneet",
   "Company":"abs",
   "Moedl":"avhn",
   "Price":1000
  }
  constructor(){

  }
  ngOnInit(): void {

  }

}
