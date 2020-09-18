import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public fireAuth: FireService) { }

  ngOnInit() {
    
  }

}
