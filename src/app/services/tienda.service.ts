import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tienda } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  tiendaInfo: tienda;

  constructor(private http: HttpClient) { }ç

  getInfo(){
    this.http.get<tienda>('/assets/data/tienda.json').subscribe(resp => this.tiendaInfo = resp);
  }
}
