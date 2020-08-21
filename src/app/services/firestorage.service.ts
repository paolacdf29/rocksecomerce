import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private storage: AngularFireStorage,
              private productosSer: ProductosService) { }

  async getimgurl(imgnombre: string){
    const imgRef = this.storage.ref(`productos/${imgnombre}`)
    let imgUrl;
    console.log(imgRef);
    imgRef.getDownloadURL().subscribe(data =>{
      imgUrl = data;
    })

    console.log(imgUrl);
    return imgUrl
  }

  agregarImg(img: File, docnombre: string, oldImg: string){
    console.log(oldImg);
    console.log(docnombre);
    if(oldImg != ''){
      this.eliminarimg(oldImg);
    }
    const storageRef = this.storage.ref('productos').child(docnombre);
    storageRef.put(img);
    let url;
    storageRef.getDownloadURL()
      .subscribe(info =>{
        console.log(info);
        url = info;
      });
    return url
  }

  async eliminarimg(imgref: string){
    const storageRef = this.storage.ref('productos').child(imgref);
    await storageRef.delete();
  }


}
