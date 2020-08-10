import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../../services/ordenes.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  ventas: number = 0;
  totalproductos: number = 0;
  totaldinero: number = 0;

  constructor(private ordenes: OrdenesService) { }

  ngOnInit() {
    this.ventas = this.ordenes.ordenes.length;
    this.ordenes.ordenes.map(orden =>{
      this.totaldinero += orden.data().subtotal;
      this.totalproductos += orden.data().totalprod;
    })
  }

}
