import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WalmartApiService {

  baseUrl = 'http://api.walmartlabs.com/v1/search?query='

  keyUrl = '&format=json&apiKey=vzfjh6twt9rnwhg9hh4x265x'

  constructor(private walmartHttp: Http ) { }

  getList(searchWord){
    let searchPortion = 'searchWord'
    return this.walmartHttp.get(this.baseUrl+searchPortion+this.keyUrl)
      .map((res) => res.json())
  }

}
