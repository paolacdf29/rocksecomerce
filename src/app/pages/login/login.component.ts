import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  googleUser: any;
  user: any = {
    username: '',
    pass: ''
  }

  constructor(
              public fireService: FireService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  loginGoogle(){

    this.fireService.loginGoogle().then(data => this.googleUser = data.additionalUserInfo.profile);
    console.log(this.googleUser);
  }

  loginFB(){
    //this.fireService.loginWithFb();
  }

  loginUser(){
    this.fireService.tempUser = this.user;
    this.router.navigateByUrl('/admin');
  }
}
