import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CoverComponent } from './cover/cover.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'login-signup',
    component: LoginSignupComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'home2',
    component: CoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
