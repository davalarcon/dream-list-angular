import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  {
    path: '',
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
  },
  {
    path: 'logout',
    component: NavbarComponent
  },
  {
    path: 'users-page',
    component: UsersPageComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
