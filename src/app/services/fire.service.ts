import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  tempUser: any;
  usuarioVerificado: boolean;

  constructor(public auth: AngularFireAuth) { }

  loginGoogle(){ 
    const proveedor = new auth.GoogleAuthProvider

   return this.auth.auth.signInWithPopup(proveedor);
  }

  loginWithFb(){

    this.auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
   }

  logOut(){
    
    return this.auth.auth.signOut();
  }

  getUserId(){
    if(!this.auth.auth.currentUser){
      return "no hay user"
    }else{
      return this.auth.auth.currentUser.uid;
    }
  }

  getuser(){
    if(!this.auth.auth.currentUser){
      return null
    }else{
      const user = {
        nombre: this.auth.auth.currentUser.displayName,
        email: this.auth.auth.currentUser.email,
        id: this.auth.auth.currentUser.uid
      }
      return user
    }
  }
}
