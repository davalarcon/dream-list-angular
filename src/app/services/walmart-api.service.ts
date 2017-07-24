import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WalmartApiService {

  // baseUrl = 'http://api.walmartlabs.com/v1/search?query='
  baseUrl = 'https://api.bestbuy.com/v1/products((search=tv)&(categoryPath.id=abcat0101000))?apiKey=BTcKh5HDYbNCenSDKoaeGrGW&sort=customerReviewCount.asc&format=json'

  // keyUrl = '&format=json&apiKey=vzfjh6twt9rnwhg9hh4x265x'
  // keyUrl = '.json?apiKey=BTcKh5HDYbNCenSDKoaeGrGW'

  constructor(private walmartHttp: Http ) { }

  getList(searchWord){
    let searchPortion = '8880044'
    return this.walmartHttp.get(this.baseUrl)
    //   {
    //   jsonp: "callback", dataType: "jsonp", success: function(response) {console.log(response)}
    // }

      .map((res) => res.json())
  }

}
