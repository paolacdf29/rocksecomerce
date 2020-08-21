import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { producto } from '../interfaces/interfaces';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productoscargados: boolean = false;
  productosdisp: any[] = [];
  
  constructor(private firebase: AngularFirestore,
              private router: Router) { }

  getproductos(){
    if(this.productosdisp.length > 0){
      this.productosdisp = []
    }
    this.firebase.collection('productos').get()
          .subscribe(snapshot => {
            snapshot.forEach((doc) => {
              if(doc.data().activo){
                this.productosdisp.push(doc);
              }
            }
            );
            this.productoscargados = true;
          });
  }

  getproductosinactivos(){
    if(this.productosdisp.length > 0){
      this.productosdisp = []
    }
    this.firebase.collection('productos').get()
          .subscribe(snapshot => {
            snapshot.forEach((doc) => {
              if(!doc.data().activo){
                this.productosdisp.push(doc);
              }
            });
          });
  }

  getProducto(pid: number){
    return this.productosdisp[pid].data();
  }

  getproductoId(pid: number){
    return this.productosdisp[pid].id;
  }

  async editarproducto(producto: producto, pid: string){
      const productoRef = this.firebase.collection('productos').doc(pid);
      const res = productoRef.set(producto, {merge: true});
      console.log(res);
  }

  async agregarproducto(producto: producto){
    const res = this.firebase.collection('productos').add(producto);
  }

  async cambiarestado(pid: string, nuevoEstado){
    const productoRef = this.firebase.collection('productos').doc(pid);
    const res = productoRef.set({activo: nuevoEstado}, {merge: true});
    console.log(res);
  }

  async eliminarproducto(pid: string){
    const eliminado = this.firebase.collection('productos').doc(pid).delete();
    console.log(eliminado);
    this.router.navigateByUrl('/admin/producto')
  }

}

