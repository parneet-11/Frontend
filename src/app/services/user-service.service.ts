import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  addUser(data:FormGroup){
    return this.http.post('http://localhost:5054/api/Users',data);
  }

  userLogin(data:FormGroup):Observable<any>{
    return this.http.post('http://localhost:5054/api/Users/login', data);

  }

  userDetails(id:string){



    const localToken = localStorage.getItem('token');
    let head_obj=new HttpHeaders({
      Authorization:`Bearer ${localToken}`
    })
    // let tokenizedrequest = request.clone({
    //       setHeaders:{
    //         Authorization:`Bearer ${localToken}`
    //       }
    //   });


      return this.http.get('http://localhost:5054/api/Users/' + id, {headers:head_obj});
  }

}
