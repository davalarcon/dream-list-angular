import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { LoginSignupService } from '../services/login-signup.service';
import { FeedComponent} from '../feed/feed.component';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  currentUser : any = {};
  giftArray: any[] = [];

  userGiftError: string;

  porcentageOfContributions: any = [];

  contributionAmount: number;

  price: number;

  constructor(
    private routerThang: Router, //to redirect once we are sign up
    private productThang: ProductService,
    private authThang: LoginSignupService,
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
    .then((userFromApi)=>{
      this.currentUser = userFromApi;
      console.log(this.currentUser);
    })
    .catch(()=>{
      this.routerThang.navigate(['/login-signup'])
    })
    this.productThang.usersProducts()
      .subscribe((usersGifts)=>{
        this.giftArray = usersGifts;

        this.giftArray.forEach((gift, i) =>{
          this.porcentageOfContributions[i] = (gift.totalContribution / gift.price) * 100;
          let cow = this.porcentageOfContributions[i];


        });


      },
      ()=>{
        this.userGiftError = " Sorry, not gifts selected...yet 😉"
      }
    )



  }

  deleteItem(productId) {
    this.productThang.deleteProduct(productId)
      .subscribe(() => {
        window.location.replace(environment.apiBase+'/users-page')
        console.log("Deleted");

      });
}





}
