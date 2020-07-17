import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto, porden } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: porden[] = [];
  totalprod: number = 0;
  subtotal: number = 0;
  comentarios: string;

  constructor(private http: HttpClient) { }

  agregarProducto(producto: producto, cantidad: number){
    const porden = {
      id: "cloudFirestoreId",
      nombre: producto.nombre,
      cantidad: cantidad,
      precio: producto.precio
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
  }

  enviarOrden(){
    //aqui se envia la orden al backend
  }

  checkOut(){
    //aqui se hace el cobro
    this.enviarOrden();
  }

}
