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
    imgRef.getDownloadURL().subscribe(data =>{
      imgUrl = data;
    })

    console.log(imgUrl);
    return imgUrl
  }

  agregarImg(img: File, docid: string, extencion: string){
    const storageRef = this.storage.ref(`productos/${docid}.${extencion}`);
    storageRef.put(img)
    let url;
    storageRef.getDownloadURL()
      .subscribe(info =>{
        console.log(info);
        url = info;
      });
    console.log(url);
    return url
  }


}
