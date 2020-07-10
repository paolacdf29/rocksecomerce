import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: any[] = [];
  totalprod: number = 0;
  subtotal: number = 0; 

  constructor(private http: HttpClient) { }

  agregarProducto(producto, cantidad){
    this.productos.push(producto);
    this.subtotal += producto.precio * cantidad;
    this.totalprod += cantidad;
  };

  obtenerProductos(){
    return this.productos;
  }
  
  eliminarProducto(index){
    this.subtotal -= this.productos[index].precio;
    this.totalprod -= 1;
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
