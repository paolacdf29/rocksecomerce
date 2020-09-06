import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireService } from '../services/fire.service';
import { TiendaService } from '../services/tienda.service';

@Injectable({
  providedIn: 'root'
})
export class AdminctrlGuard implements CanLoad {

  constructor(private fire: FireService,
              private tienda: TiendaService,
              private router: Router) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    const infotienda = this.tienda.tiendaInfo;
    const user = this.fire.fireauth.auth.currentUser;
    
    if(!user){
      this.router.navigateByUrl('login');
    }


    if(user.uid == infotienda.admin){
      console.log('El usuario es el admin');
      this.fire.usuarioVerificado = true;
      return true;

    }else{
      console.log('El usuario no es el admin');
      console.log(this.fire.getUserId());
      this.fire.usuarioVerificado = false;
      this.router.navigateByUrl('login');
      return false
    }
  }
}
