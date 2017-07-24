import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginSignupService } from '../services/login-signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
