import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {

  constructor(
    private httpThang: Http
  ) { }

  newGift(theName, theType, thePrice, theDescription, theImage){
    return this.httpThang
      .post(
        environment.apiBase + '/api/products',
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
        environment.apiBase + '/api/products',
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


  usersProducts(){
    console.log('Im in usersProducts')
    return this.httpThang
      .get(
        environment.apiBase + '/api/products/user',
        { withCredentials: true }
      )
      .map(res=>res.json());
  }

  feedProducts(){
    console.log('Im in usersProducts')
    return this.httpThang
      .get(
        environment.apiBase + '/api/products',
        { withCredentials: true }
      )
      .map(res=>res.json());
  }

  updateGift(newAmount, userId, productId){
    return this.httpThang
    .patch(
      environment.apiBase+'/api/products/'+productId+'/update',
      {
        newTotal: newAmount,

      },
      (result) => {
        result => result.json();
      }

    )
  }


  deleteProduct(productId){
    return this.httpThang
    .get(
      environment.apiBase+'/api/products/'+productId+'/delete',
      {withCredentials: true}
    )
    .map(res=>res.json());
  }

}
