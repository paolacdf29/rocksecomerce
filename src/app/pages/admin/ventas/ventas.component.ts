import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../../services/ordenes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  OrdenesActivas: Observable<any[]>

  constructor(public ordenes: OrdenesService) { }

  ngOnInit() {
    this.ordenes.getOrders();
  }

}
