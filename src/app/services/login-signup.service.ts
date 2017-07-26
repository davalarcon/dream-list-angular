import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class LoginSignupService {

  constructor(
    private httpAddress: Http
  ) { }

  //POST signup
    //an argument for each 'req.body' in the API route.
    signup (theFirstName, theLastName, theBirthday, theEmail, thePassword){
        return this.httpAddress
        .post(
             environment.apiBase + '/api/signup',
            {
              signupFirstName: theFirstName,
              signupLastName: theLastName,
              signupBirthday: theBirthday,
              signupEmail: theEmail,
              signupPassword: thePassword,
            },
            { //Send the Cookies across domains
              withCredentials: true,
            }
          )
          .toPromise()
          //.then means it was successful. .catch means there was an error.
          .then(res => res.json())
    }

    login(theEmail, thePassword){
    return this.httpAddress
      .post(
        environment.apiBase + '/api/login',
        {
          loginEmail: theEmail,
          loginPassword: thePassword
        },
        {
          withCredentials: true,
        }
      )
      .toPromise()
      .then(res=>res.json());
  }
  //POST logout

  logout(){
    return this.httpAddress
      .post(
        environment.apiBase + '/api/logout',

        {},
        {
          withCredentials: true,
        }
      )
        .toPromise()
        .then(res=>res.json());

  }


    checklogin(){
  return this.httpAddress
    .get(
      environment.apiBase + '/api/checklogin',

      { withCredentials: true }
    )
    .toPromise()
    .then(res=>res.json());
}

}
