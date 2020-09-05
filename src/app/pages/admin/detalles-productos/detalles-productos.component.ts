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
    categoria: '',
    img: '',
    activo: true,
    imgref: '',
  };
  productoImg: File;
  imgExtencion: string;
  id_producto: string = '';
  newref: string;
  loading: boolean = true;

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

  async enviarproducto(){
    if(this.id_producto == ''){
      this.id_producto = await this.productos.agregarproducto(this.producto);
      this.subirimg()
    }else{
      this.productos.editarproducto(this.producto, this.id_producto);
      this.subirimg()
    }
    this.productos.getproductos()
    this.router.navigateByUrl('/admin');
  
  }

  prepararImg(evento){
    this.loading = false
    this.productoImg = evento.target.files[0]; //Esto contiene la imagen
    this.imgExtencion =  evento.target.files[0].type.split('/')[1]; //Extencion de la imagen
    setTimeout(() =>{
      this.loading = true;
    }, 3000);
  }

  async subirimg(){
    this.newref = this.id_producto + '.' + this.imgExtencion; //Nombre que tendra la imagen
    this.firestorage.agregarImg(this.productoImg, this.newref, this.producto.imgref, this.id_producto); //Sube la imagen y almacena el url
  }

}
