import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get('http://localhost:5066/api/Products');
  }

  getProductById(id:number){
    console.log('http://localhost:5066/api/Products/GetById/'+id);
    return this.http.get('http://localhost:5066/api/Products/GetById/'+id);
  }

  addProduct(data:FormGroup){
    console.log("data in service" +JSON.stringify(data));
    console.log('http://localhost:5066/api/Products/AddProduct')
    return this.http.post('http://localhost:5066/api/Products/AddProduct',data)
  }

  updateProduct(id:number, data:FormGroup){
    console.log('http://localhost:5066/api/Products/UpadteProduct/'+id);
    return this.http.put('http://localhost:5066/api/Products/UpadteProduct/'+id, data);
  }

  deleteProduct(id:number){
    return this.http.delete('http://localhost:5066/api/Products/'+id);
  }
}

