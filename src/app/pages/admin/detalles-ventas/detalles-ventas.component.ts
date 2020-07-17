import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-ventas',
  templateUrl: './detalles-ventas.component.html',
  styleUrls: ['./detalles-ventas.component.scss']
})
export class DetallesVentasComponent implements OnInit {

  oid: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.oid = this.router.snapshot.params.oid;
    console.log(this.oid);
  }

}
