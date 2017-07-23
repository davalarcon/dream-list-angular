import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { LoginSignupService } from './services/login-signup.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WalmartApiService } from './services/walmart-api.service';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    LoginSignupComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
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
