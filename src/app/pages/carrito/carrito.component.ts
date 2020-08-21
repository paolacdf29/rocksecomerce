import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { NgForm } from '@angular/forms';
import { FireService } from '../../services/fire.service';

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
  user: any;

  constructor(public carrito: CarritoService,
              private fireAuth: FireService) { }

  ngOnInit() {
    this.user = this.fireAuth.getuser();
  }

  quitame(i: number){
    this.carrito.eliminarProducto(i)
  }

  comprame(formulario: NgForm){
    if(this.carrito.productos.length == 0){
      alert('No tienes productos en el carrito');
    }else{
      if(formulario.valid && formulario.touched){
        if(this.user){
          this.comprador.nombre = this.user.nombre;
          this.comprador.email = this.user.email;
        }
        this.carrito.checkOut(this.comprador);
      }else{
        alert('Hacen falta campos por rellenar');
      }
    }

  }
}
