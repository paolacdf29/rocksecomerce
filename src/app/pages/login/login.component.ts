import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registro: boolean = false;
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
    this.googleUser = this.fireService.normalLogin(this.user.username, this.user.pass);
    this.router.navigateByUrl('/admin');
  }
  
  activaRegistro(){
    this.registro = !this.registro
  }

  registrar(){
    this.fireService.registraUsuario(this.user.username, this.user.password);
  }


}
