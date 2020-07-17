import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../../services/tienda.service';

@Component({
  selector: 'app-tienda-datos',
  templateUrl: './tienda-datos.component.html',
  styleUrls: ['./tienda-datos.component.scss']
})
export class TiendaDatosComponent implements OnInit {

  editar: boolean = false;

  constructor(public tienda: TiendaService) { }

  ngOnInit() {
  }

  toggleEditar(){
    this.editar = !this.editar;
  }

}
