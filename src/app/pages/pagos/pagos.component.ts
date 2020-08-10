import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  ref: string = ''; 

  constructor(public carrito: CarritoService) { }

  ngOnInit() {
  }

  finalizarPago(){
    if(this.ref != ''){
      this.carrito.enviarOrden(this.ref)
    }
  }

}
