import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { tienda } from '../../interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public tienda: TiendaService) {
    this.tienda.getInfo();
  }
  
  ngOnInit() {
    //this.tienda.getInfo();
  }

}
