import { Component, OnInit } from '@angular/core';
import { WalmartApiService } from '../services/walmart-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [WalmartApiService],
})
export class ProductComponent implements OnInit {

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

  searchWord= "";

  constructor(private walmartApiService: WalmartApiService) { }

  ngOnInit() {
  }

  autoScrollTo(){
    
  }

  fetchList(searchWord){
    this.walmartApiService.getList(searchWord)
      .subscribe((theList)=> {
        this.searchWord = '';
        this.products = theList;
      })
  }


}
