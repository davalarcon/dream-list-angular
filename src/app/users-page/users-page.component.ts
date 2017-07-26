import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { LoginSignupService } from '../services/login-signup.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  currentUser : any = {};
  giftArray: any[] = [];

  userGiftError: string;

  constructor(
    private routerThang: Router, //to redirect once we are sign up
    private productThang: ProductService,
    private authThang: LoginSignupService,
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
    .then((userFromApi)=>{
      this.currentUser = userFromApi;
    })
    .catch(()=>{
      this.routerThang.navigate(['/login-signup'])
    })
  }


  popupateGifts(){
    console.log('Im in populateGifts')
    this.productThang.usersProducts()
      .subscribe((usersGifts)=>{
        this.giftArray = usersGifts;
      },
      ()=>{
        this.userGiftError = " Sorry, not gifts selected...yet 😉"
      }
    )
  }

}
