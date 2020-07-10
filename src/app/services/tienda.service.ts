import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  tiendaInfo: any = {};

  constructor(private http: HttpClient) { }ç

  getInfo(){
    this.http.get('/assets/data/tienda.json').subscribe(resp => this.tiendaInfo = resp);
  }
}
