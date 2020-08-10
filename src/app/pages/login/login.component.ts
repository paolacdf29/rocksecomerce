import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
              public fireService: FireService,
              private router: Router
              ) { }

  ngOnInit() {
    console.log('si entra');
  }

  login(){
    this.fireService.loginWithGoogle().then(data => this.router.navigate(['/']) );
  }

}
