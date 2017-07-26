import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart-api.service';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [WalmartApiService],
})
export class ProductListComponent implements OnInit {

  products: any = [
    {
      name: 'TheName',
      salePrice: 'ThePrice',
      sku: 'TheSku',
      itemId: 'TheId',
      categoryPath: 'TheCategory',
      largeImage: 'TheImage',
      modelNumber: 'TheModel',
      customerRating: 'TheRating',
      numReviews: 'TheNumReviews',
      stock: 'TheStock',
      longDescription: 'TheShortDescription',
    }
  ]

  productResults = [];

  searchWord= "";


  constructor(
    private walmartApiService: WalmartApiService,
    private routerThang: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.routerThang.params.subscribe((actualParams)=>{
      this.searchWord = actualParams.searchWord
    })
  }

  fetchList(searchWord){
    this.walmartApiService.getList(searchWord)
      .subscribe((theList)=> {
        console.log(theList);
        this.productResults = theList.products;
        console.log(this.productResults);
      })
  }

}
