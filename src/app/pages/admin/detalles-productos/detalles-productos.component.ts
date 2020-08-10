import { Component, OnInit } from '@angular/core';
import { producto } from '../../../interfaces/interfaces';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestorageService } from '../../../services/firestorage.service';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.component.html',
  styleUrls: ['./detalles-productos.component.scss']
})
export class DetallesProductosComponent implements OnInit {

  producto: producto = {
    nombre: '',
    descripcion: '',
    precio: null,
    colores: [],
    categoria: '',
    img: '',
    activo: true,
    imgref: '',
  };
  productoImg: File;
  imgExtencion: string;
  id_producto: string = '';
  colorNuevo: string;

  constructor(private productos: ProductosService,
              private firestorage: FirestorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const pid = this.route.snapshot.params.pid;
    if(pid){
      this.producto =  this.productos.getProducto(pid);
      this.id_producto = this.productos.getproductoId(pid);
    }

  }

  quitarcolor(i: number){
    this.producto.colores.splice(i, 1)
  }

  agregarcolor(){
    if(this.colorNuevo != ''){
      this.producto.colores.push(this.colorNuevo);
      this.colorNuevo = '';
    }
  }

  enviarproducto(){
    if(this.id_producto == ''){
      this.productos.agregarproducto(this.producto)
    }else{
      this.productos.editarproducto(this.producto, this.id_producto);
    }
    this.router.navigateByUrl('/admin/productos');
  }

  subirimg(evento){
    this.productoImg = evento.target.files[0];
    this.imgExtencion =  evento.target.files[0].type.split('/')[1];
    this.producto.img = this.firestorage.agregarImg(this.productoImg, this.id_producto, this.imgExtencion);
    this.producto.imgref = this.id_producto + '.' + this.imgExtencion;
  }

}
