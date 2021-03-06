import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginSignupService } from '../services/login-signup.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  logoutError: string;

  constructor(
    private authThang: LoginSignupService,
    private routerThang: Router, //to redirect once we are sign up
  ) { }

  ngOnInit() {
  }

  logMeOutPls(){
      this.authThang.logout()
      .then((resultFromApi)=>{
        this.routerThang.navigate(['/home'])
      })
      .catch(()=>{
        this.logoutError = 'Log out went 👎'
      });
    }

}
