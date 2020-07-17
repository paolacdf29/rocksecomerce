import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosdisp: producto[] = [];
  //productosdisp2: any[] = [];

  constructor(private http: HttpClient) { }

  getproductos(){
    if(this.productosdisp.length == 0){
      this.http.get<producto[]>('/assets/data/productos.json')
          .subscribe(resp => 
            resp.map(item => this.productosdisp.push(item)));
    }
  }

  getProducto(pid: number){
    return this.productosdisp[pid];
  }

}

