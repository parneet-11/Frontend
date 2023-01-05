import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup= new FormGroup({});
  constructor(private fb:FormBuilder, private userService:UserServiceService, private router:Router){

  }
  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm(){
    this. loginForm = this.fb.group({
      name: ['', Validators.required],
      password:['', Validators.required],

    });
  }
  onSubmit(){
   this.userService.userLogin(this.loginForm.value).subscribe(data=>{
    console.log(data);
   },errors=>{
    console.log(errors);
   });
  // this.loginForm.reset();
   this.router.navigate(['/']);

  }

}
