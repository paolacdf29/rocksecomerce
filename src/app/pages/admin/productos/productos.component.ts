import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(public productoSer: ProductosService) { }

  ngOnInit() {
    this.productoSer.getproductos()
  }


  

}
