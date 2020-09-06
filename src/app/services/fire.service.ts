import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  usuarioVerificado: boolean;
  errormsj: string;

  constructor(public fireauth: AngularFireAuth) { }

  loginGoogle(){ 

    const proveedor = new auth.GoogleAuthProvider

    return this.fireauth.auth.signInWithPopup(proveedor);
  }

  loginWithFb(){

    this.fireauth.auth.signInWithPopup(new auth.FacebookAuthProvider());
   }

  logOut(){
    
    return this.fireauth.auth.signOut();
  }

  getUserId(){
    if(!this.fireauth.auth.currentUser){
      return "no hay user"
    }else{
      return this.fireauth.auth.currentUser.uid;
    }
  }

  getuser(){
    if(!this.fireauth.auth.currentUser){
      return null
    }else{
      const user = {
        nombre: this.fireauth.auth.currentUser.displayName,
        email: this.fireauth.auth.currentUser.email,
        id: this.fireauth.auth.currentUser.uid
      }
      return user
    }
  }

  registraUsuario(mail: string, pass: string){
    this.fireauth.auth.createUserWithEmailAndPassword(mail, pass)
      .catch(error => {
        console.log('Ha ocurrido un error', error.message);
        this.errormsj = error.message;
      });
        
  }

  normalLogin(mail: string, pass: string){
    this.fireauth.auth.signInWithEmailAndPassword(mail, pass)
        .catch(error =>{
          console.log(error.message);
          this.errormsj = error.message;
        })

    return this.getuser();

  }
}
