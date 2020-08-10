import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  oid: string;
  pedido: any;
  nuevo: boolean = false;
  defaultAlert: any[] =[
    {
      type: 'success',
      dismissable: true,
      msj: 'Felicidades! tu pedido ha sido recibido con exito, recuerda guardar el ID para hacerle seguimiento'
    }
  ];

  constructor(private ordenSrvc: OrdenesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params.id){
      this.oid = this.route.snapshot.params.id;
      this.nuevo = true;
      this.buscame();
    }
  }

  buscame(){
    this.ordenSrvc.getOrdenById(this.oid)
      .subscribe(resp => this.pedido = resp);
    
  }

  onClosed(dismissedAlert){
    this.defaultAlert = this.defaultAlert.filter(alert => alert !== dismissedAlert);

  }

}
