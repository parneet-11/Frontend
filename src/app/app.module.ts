import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserServiceService } from './services/user-service.service';
import { ProductServiceService } from './services/product-service.service';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { CustomInterceptor } from './custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AddProductComponent,
    LoginComponent,
    HomeComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [UserServiceService,
  ProductServiceService,
  {
    provide:HTTP_INTERCEPTORS,
     useClass:CustomInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
