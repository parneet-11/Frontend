import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: 'register-user', component:RegisterComponent},
  {path: 'app-product-card', component:ProductCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
