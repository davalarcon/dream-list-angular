import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart-api.service';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { LoginSignupService } from '../services/login-signup.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [WalmartApiService],
})
export class ProductComponent implements OnInit {

  currentUser : any = {};

  giftName: string;
  giftType: string;
  giftPrice: number;
  giftDescription: string;
  giftImage: string;

  name: string;
  sku: number;
  price: number;
  longDescription: string;
  image: string;

  saveError: string;

  giftArray: any[] = []

  products: any = [
    {
      sku: 'TheSku',
      name: 'TheName',
      salesPrice: 'ThePrice',
      itemId: 'TheId',
      categoryPath: 'TheCategory',
      mediumImage: 'TheImage',
      modelNumber: 'TheModel',
      customerRating: 'TheRating',
      numReviews: 'TheNumReviews',
      stock: 'TheStock',
      longDescription: 'TheLongDescription',
    }
  ];

  productResults = [];

  searchWord= "";

  constructor(
    private walmartApiService: WalmartApiService,
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

  autoScrollTo(){

  }

  fetchList(searchWord){
    this.routerThang.navigate(['/product-list', searchWord])

    this.walmartApiService.getList(searchWord)
      .subscribe((theList)=> {
        console.log(theList);
        this.productResults = theList.products;
        console.log(this.productResults);
      })
  }

  createGift(){
    this.productThang.newGift(this.giftName, this.giftType, this.giftPrice, this.giftDescription, this.giftImage)
      .subscribe(
        (newGiftFromApi)=>{
          this.giftArray.push(newGiftFromApi);
          this.giftName= '';
          this.giftType='';
          this.giftPrice= undefined;
          this.giftDescription='';
          this.giftImage='';
          this.saveError='';
        },
        (err)=>{
          this.saveError="Missing Information"
        }
      )
  }

  addProduct(someProduct){
    this.productThang.giftFromBB(someProduct.name, someProduct.sku, someProduct.price, someProduct.longDescription, someProduct.image)
    .subscribe(
      (newGiftFromApi)=>{
        this.giftArray.push(newGiftFromApi);
        this.name= '';
        this.sku= undefined;
        this.price= undefined;
        this.longDescription='';
        this.image='';
        this.saveError='';
      },
      (err)=>{
        this.saveError="Missing Information"
      }
    )
  }


}
