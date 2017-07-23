import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
            'http://localhost:3000/api/signup',
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
        'http://localhost:3000/api/login',
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
        'http://localhost:3000/api/logout',

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
      'http://localhost:3000/api/checklogin',

      { withCredentials: true }
    )
    .toPromise()
    .then(res=>res.json());
}

}
