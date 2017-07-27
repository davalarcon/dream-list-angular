import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { LoginSignupService } from './services/login-signup.service';
// import { FileSelectDirective } from 'ng2-file-upload'; //after adding the npm package: npm install ng2-file-upload --save

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WalmartApiService } from './services/walmart-api.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { FeedComponent } from './feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    LoginSignupComponent,
    ProductListComponent,
    CoverComponent,
    NavbarComponent,
    UsersPageComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // FileSelectDirective, // add this to upload images
  ],
  providers: [
    LoginSignupService,
    AuthService,
    ProductService,
    WalmartApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
