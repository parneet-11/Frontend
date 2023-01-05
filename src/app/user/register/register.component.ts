import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ConfirmValidator } from 'src/app/validator/confirmValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({});
  user:Users
  constructor(private fb:FormBuilder, private userService:UserServiceService, private router:Router){

  }
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this. registerForm = this.fb.group({
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      confirmPassword:['', [Validators.required]]
    },{ validator:ConfirmValidator('password','confirmPassword')});
  }
  onSubmit(){
   this.userService.addUser(this.registerForm.value).subscribe(data=>{
    console.log(data);
   },errors=>{
    console.log(errors);
   });
   this.registerForm.reset();
   this.router.navigate(['/login-user']);

  }


}
