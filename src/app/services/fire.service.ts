import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(public auth: AngularFireAuth) { }

  loginWithGoogle(){
   return  this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logOut(){
    return this.auth.auth.signOut();
  }
}
