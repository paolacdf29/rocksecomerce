import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminModule } from './pages/admin/admin.module';


const routes: Routes = [
  {path: 'tienda', component: ShopComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'producto/:pid', component: ProductoComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminModule)},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
