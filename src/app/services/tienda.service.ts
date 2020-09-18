import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { tienda } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  tiendaInfo: any;

  constructor(private firestore: AngularFirestore) { }

  getInfo(){

    this.firestore.collection('tienda').doc('1').get()
      .subscribe((doc) => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.tiendaInfo = doc.data();
        }
      })
  }

  editarInfo(){
    const tiendaRef = this.firestore.collection('tienda').doc('1');
    const res = tiendaRef.set(this.tiendaInfo, {merge: true});
  
  }
}
