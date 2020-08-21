import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  ordenes: any[] = [];

  constructor(private firesetore: AngularFirestore,
              private router: Router) { }

  getOrders(){
    if( this.ordenes.length > 0){
      this.ordenes = [];
    }
    this.firesetore.collection('ordenes').get()
        .subscribe( snapshot =>{
          snapshot.forEach( (info) => {
            this.ordenes.push( info );
          });
        });
  }

  getOrdenesActivas(){
    if( this.ordenes.length > 0){
      this.ordenes = [];
    }
    const coleccion = this.firesetore.collection('ordenes')
    coleccion.get()
      .subscribe( snapshot =>{
        snapshot.forEach( (info) => {
          if(info.data().activo){
            this.ordenes.push( info );
          }
        });
      });
  }

  getOrdenesCompletadas(){
    if( this.ordenes.length > 0){
      this.ordenes = [];
    }
    const coleccion = this.firesetore.collection('ordenes')
    coleccion.get()
      .subscribe( snapshot =>{
        snapshot.forEach( (info) => {
          if(!info.data().activo){
            this.ordenes.push( info );
          }
        });
      });
  }

  getOrden(oid: number){
    return this.ordenes[oid];
  }

  getOrdenById(id: string){
    const doc = this.firesetore.collection('ordenes').doc(id);
    return doc.valueChanges();
  }

  getUserOrders(userid: string){
    let orders = [];
    this.firesetore.collection('ordenes').get()
        .subscribe( snapshot =>{
          snapshot.forEach( (info) => {
            if(info.data().uid == userid){
              orders.push( info.data() );
            }
          });
        });

    return orders;
  }

  async setOrder(oid: string, data){
    const ordenRef = this.firesetore.collection('ordenes').doc(oid);
    const res = await ordenRef.set(data, { merge: true });
    this.router.navigateByUrl('/admin');
  }

  async eliminarOrden(oid: string){
    const ordenRef = this.firesetore.collection('ordenes').doc(oid);
    const res = await ordenRef.delete();
    return res;
  }

}
