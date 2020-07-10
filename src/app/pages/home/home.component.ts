import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public prodServ: ProductosService) { }

  ngOnInit() {
    if(this.prodServ.productosdisp.length == 0){
      this.prodServ.getproductos();
    }
  }

}
