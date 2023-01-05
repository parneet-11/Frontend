import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId:string;
  user:any;
  constructor( private userService:UserServiceService) {

  }
  ngOnInit(): void {
    this.userId= localStorage.getItem('uid') as string;
    this.getUserDetail();
    // string | null
  }

  getUserDetail(){
    this.userService.userDetails(this.userId).subscribe(data=>{
      this.user= data;
      console.log(data);
    },errors=>{
      console.log(errors);
    })
  }

}
