import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';
import { FirestorageService } from '../../../services/firestorage.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(public productoSer: ProductosService,
              private firestorage: FirestorageService) { }

  ngOnInit() {
    this.productoSer.getproductos()
  }

  eliminarprod(pid: string, imgref: string){
    this.firestorage.eliminarimg(imgref);
    this.productoSer.eliminarproducto(pid);
  }
  

}
