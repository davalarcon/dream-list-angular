import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart-api.service';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [WalmartApiService],
})
export class ProductComponent implements OnInit {

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
    private productThang: ProductService
  ) { }

  ngOnInit() {
  }

  autoScrollTo(){

  }

  fetchList(searchWord){
    this.walmartApiService.getList(searchWord)
      .subscribe((theList)=> {
        console.log(theList);
        this.productResults = theList.products;
        console.log(this.productResults);
      })
  }

  createGift(){
    this.productThang.newGift()
  }


}
