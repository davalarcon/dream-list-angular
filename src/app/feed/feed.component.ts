import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { LoginSignupService } from '../services/login-signup.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  currentUser : any = {};
  ownerId: any = {};
  giftArray: any[] = [];

  oneGift: any;

  userGiftError: string;

  isShowingForm: boolean = false;

  contributionAmount: number;

  price: number;

  newAmount: number;

  porcentageOfContributions: any = [];

  constructor(
    private routerThang: Router, //to redirect once we are sign up
    private productThang: ProductService,
    private authThang: LoginSignupService,
  ) { }

  ngOnInit() {
    console.log(this.currentUser.firstName+"blaaaaah");
    this.authThang.checklogin()
    .then((userFromApi)=>{
      this.currentUser = userFromApi;
    })
    .catch(()=>{
      this.routerThang.navigate(['/login-signup'])
    })
    this.productThang.feedProducts()
      .subscribe((usersGifts)=>{
        this.giftArray = usersGifts;

        this.giftArray.forEach((gift, i) =>{
          this.porcentageOfContributions[i] = (gift.totalContribution / gift.price) * 100;
          let cow = this.porcentageOfContributions[i];
        

        });
        console.log(this.ownerId.firstName)
      },
      ()=>{
        this.userGiftError = " Sorry, not gifts selected...yet 😉"
      }
    )



  }

  showContributionForm(){
    this.isShowingForm = true;
  }

  saveNewContribution(index){
    this.newAmount =  this.giftArray[index].totalContribution+this.contributionAmount;
    this.productThang.updateGift(this.newAmount, this.currentUser._id, this.giftArray[index]._id)
    .subscribe(
      (updateGiftFromApi)=>{
         this.giftArray[index].totalContribution = this.newAmount;
         this.porcentageOfContributions[index] = ( this.giftArray[index].totalContribution / this.giftArray[index].price * 100)
         console.log(this.porcentageOfContributions)
         console.log(this.price+"price")
         console.log(updateGiftFromApi)
      }
    )
  }



  // detailGift(id){
  //   this.productThang.detailProduct(id)
  //     .subscribe((giftDetails)=>{
  //       this.giftArray = giftDetails;
  //     },
  //     ()=>{
  //       this.userGiftError = ""
  //     }
  //   )
  // }


}
