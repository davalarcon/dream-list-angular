import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart-api.service';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router'; //to redirect once we are sign up

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
      salesPrice: 'ThePrice',
      itemId: 'TheId',
      categoryPath: 'TheCategory',
      mediumImage: 'TheImage',
      modelNumber: 'TheModel',
      customerRating: 'TheRating',
      numReviews: 'TheNumReviews',
      stock: 'TheStock',
      shortDescription: 'TheShortDescription',
    }
  ]

  productResults = [];

  searchWord= "";

  constructor(
    private walmartApiService: WalmartApiService,
    private routerThang: Router, //to redirect once we are sign up
  ) { }

  ngOnInit() {
  }

  fetchList(searchWord){
    this.walmartApiService.getList(searchWord)
      .subscribe((theList)=> {
        console.log(theList);
        this.productResults = theList.products;
        this.routerThang.navigate(['/product-list']);
        console.log(this.productResults);
      })
  }

}
