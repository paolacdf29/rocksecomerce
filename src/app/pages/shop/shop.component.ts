import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  filtroCategoria: string = '';

  constructor(public productosSer: ProductosService) { }

  ngOnInit() {
    if(this.productosSer.productosdisp.length == 0){
      this.productosSer.getproductos();
    }
  }

  filtrarcar(categoria){
    this.filtroCategoria = categoria;

  }

}
