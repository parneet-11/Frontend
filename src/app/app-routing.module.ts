import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'register-user', component:RegisterComponent},
  {path: 'app-product-card', component:ProductCardComponent},
  {path: 'login-user', component:LoginComponent},
  {path: 'product-details/:id', component:ProductDetailsComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'update-product/:id', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
