import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService {

  constructor(
    private httpThang: Http
  ) { }

  newGift(theName, theType, thePrice, theDescription, theImage){
    return this.httpThang
      .post(
        'http://localhost:3000/api/products',
        {
          giftName: theName,
          giftType: theType,
          giftPrice: thePrice,
          giftDescription: theDescription,
          giftImage: theImage,
        },
        {
          withCredentials: true
        }
      )
      .map(res=>res.json());
  }

  giftFromBB(theName, theSku, thePrice, theDescription, theImage){
    return this.httpThang
      .post(
        'http://localhost:3000/api/products',
        {
          giftName: theName,
          giftSku: theSku,
          giftPrice: thePrice,
          giftDescription: theDescription,
          giftImage: theImage,
        },
        {
          withCredentials: true
        }
      )
      .map(res=>res.json());
  }

}
