import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  filtroCategoria: string = '';
  modalRef: BsModalRef;

  constructor(public productosSer: ProductosService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.productosSer.getproductos();
    
  }

  filtrarcar(categoria){
    this.filtroCategoria = categoria;

  }

  showModal(template: TemplateRef<any>){

    this.modalRef = this.modalService.show(template);
  }

}
