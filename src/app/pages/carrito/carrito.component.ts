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

  quitame(i: number){
    this.carrito.eliminarProducto(i)
  }

  comprame(){
    if(this.carrito.productos.length == 0){
      alert('No tienes productos en el carrito');
    }else{
      this.carrito.checkOut(this.comprador);
    }

  }
}
