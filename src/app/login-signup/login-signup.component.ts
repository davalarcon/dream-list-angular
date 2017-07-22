import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  nameValue: string;
  lastNameValue: string;
  birthdayValue: string;
  emailValue: string;
  passwordValue: string;

  constructor() { }

  ngOnInit() {
  }

}
