import { Injectable } from '@angular/core';
import { producto, porden, comprador } from '../interfaces/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FireService } from './fire.service';



@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: porden[] = [];
  totalprod: number = 0;
  subtotal: number = 0;
  comprador: any;
  checkon: boolean = false;

  constructor(private router: Router,
              private firestore: AngularFirestore,
              private fireAuth: FireService) { }

  agregarProducto(producto: producto, cantidad: number, tamanoelegido: string){
    const porden = {
      nombre: producto.nombre,
      cantidad: cantidad,
      precio: producto.precio,
      tamano: tamanoelegido
    }
    this.productos.push(porden);
    this.subtotal += producto.precio * cantidad;
    this.totalprod += cantidad;
  };

  obtenerProductos(){
    return this.productos;
  }
  
  eliminarProducto(index: number){
    this.subtotal -= this.productos[index].precio * this.productos[index].cantidad;
    this.totalprod -= this.productos[index].cantidad;
    this.productos.splice(index, 1);
  }

  limpiarCarrito(){
    this.productos = [];
    this.subtotal = 0;
    this.totalprod = 0;
    this.comprador = null;
    this.checkon = false;
  }

  async enviarOrden(pagoref: string){
    console.log('preparando orden..')
    const data = {
      uid: this.fireAuth.getUserId(),
      comprador: this.comprador,
      estado: 'validando',
      fecha: new Date(),
      pago: pagoref,
      productos: this.productos,
      subtotal: this.subtotal,
      totalprod: this.totalprod,
      activo: true
    }
    const res = await this.firestore.collection('ordenes').add(data);
    console.log('Orden creada exitosamente con el id: ', res.id);
    this.limpiarCarrito();
    this.router.navigateByUrl(`/tracker/${res.id}`);    
  }

  checkOut(persona: comprador){
    //aqui se hace el cobro
    this.comprador = persona;
    this.checkon = true;
    this.router.navigateByUrl('/pagos');

    //this.enviarOrden();
  }

}
