import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  comprador: any = {
    nombre: '',
    direccion: '',
    email: '',
    telefono: ''
  }

  constructor(public carrito: CarritoService) { }

  ngOnInit() {
  }

  quitame(i){
    this.carrito.eliminarProducto(i)
  }
}
