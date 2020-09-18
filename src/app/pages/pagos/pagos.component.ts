import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  ref: string = ''; 

  constructor(public carrito: CarritoService,
              public tienda: TiendaService) { }

  ngOnInit() {
  }

  finalizarPago(){
    if(this.ref != '' && this.ref.length > 3){
      this.carrito.enviarOrden(this.ref)
    }
  }

}
