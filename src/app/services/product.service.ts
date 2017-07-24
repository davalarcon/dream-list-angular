import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService {

  constructor(
    private httpThang: Http
  ) { }

  

}
