import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesService } from '../../../services/ordenes.service';
import { orden } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-detalles-ventas',
  templateUrl: './detalles-ventas.component.html',
  styleUrls: ['./detalles-ventas.component.scss']
})
export class DetallesVentasComponent implements OnInit {

  indice: number;
  orden: any;

  constructor(private router: ActivatedRoute,
              private ordenes: OrdenesService,
              private route: Router) { }

  ngOnInit() {
    this.indice = this.router.snapshot.params.oid;
    this.orden = this.ordenes.getOrden(this.indice);
    if(!this.orden){
      this.route.navigateByUrl('/admin');
    }
  }
  
  actualizarOrden(msj: string){
    let data = {
      estado: msj,
      activo: true
    }
    if(msj == 'Completado'){
      data.activo = false;
    }

    this.ordenes.setOrder(this.orden.id, data);

  }

  eliminar(){
    this.ordenes.eliminarOrden(this.orden.uid);
  }


}
