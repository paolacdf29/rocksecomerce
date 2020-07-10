import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosdisp: any[] = [];

  constructor(private http: HttpClient) { }

  getproductos(){
    this.http.get<any[]>('/assets/data/productos.json')
        .subscribe(resp => 
          resp.map(item => this.productosdisp.push(item)));
  }

  getProducto(pid){
    return this.productosdisp[pid];
  }

}

