import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  item: any;
  cantidad: number = 1;

  constructor(private prodServ: ProductosService,
              private carrito: CarritoService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    const pid = this.router.snapshot.params.pid;
    this.item = this.prodServ.getProducto(pid);
  }

  addcarrito(){
    this.carrito.agregarProducto(this.item, this.cantidad)
  }

  sumaResta(opcion: string){
    if(opcion == 'resta'){
      if(this.cantidad > 1){
        this.cantidad -= 1;
      }
    }else{
      this.cantidad += 1;
    }
  }

}
