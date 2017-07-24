import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //to redirect once we are sign up
import { LoginSignupService } from '../services/login-signup.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  isLoggedOut: boolean = false;

  firstNameValue: string;
  lastNameValue: string;
  birthdayValue: string;
  emailValue: string;
  passwordValue: string;

  errorMessage: string;

  loginEmail: string;
  loginPassword: string;

  loginErrorMessage: string;

  constructor(
    private authThang: LoginSignupService,
    private routerThang: Router, //to redirect once we are sign up
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
  //if success, we are logged in.
    .then((resultFromApi)=>{
        this.routerThang.navigate(['/product']);
    })

    .catch((err)=>{
        this.isLoggedOut = true;
      });
  }

  doSignUp(){
    this.authThang.signup(this.firstNameValue, this.lastNameValue, this.birthdayValue, this.emailValue, this.passwordValue)
      .then((resultFromApi)=>{
        //this will clear all of our forms, but maybe we won't need this since we will login automatically.
          this.firstNameValue = '';
          this.lastNameValue = '';
          this.birthdayValue = '';
          this.emailValue = '';
          this.passwordValue = '';
          this.errorMessage = '';
          // rediret to camels page
          this.routerThang.navigate(['/product']);
        // alert('Sign up worked '+ resultFromApi._id);
      })
      .catch((err)=>{
        console.log('Im in Do Sign in')
          console.log(err.json());
          const parsedError = err.json();
          this.errorMessage = parsedError.message + '😕';
      })
  } // close doSignUp

  doLogin(){
    console.log(this.loginEmail, this.loginPassword)
    this.authThang.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi)=>{
        this.loginEmail = '';
        this.loginPassword = '';

        this.loginErrorMessage = '';

        this.routerThang.navigate(['/product'])
      })
      .catch((err)=>{
        console.log('im in here')
        const parsedError = err.json();
        this.loginErrorMessage = parsedError.message + '😕';
      })
  }


}
