import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart-api.service';

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

  constructor(private walmartApiService: WalmartApiService) { }

  ngOnInit() {
  }

  fetchList(searchWord){
    this.walmartApiService.getList(searchWord)
      .subscribe((theList)=> this.products = theList)
  }

}
