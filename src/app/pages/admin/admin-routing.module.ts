import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetallesVentasComponent } from './detalles-ventas/detalles-ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TiendaDatosComponent } from './tienda-datos/tienda-datos.component';
import { TiendaBrandComponent } from './tienda-brand/tienda-brand.component';
import { MoneyComponent } from './money/money.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: VentasComponent
      },
      {
        path: 'detalles-ventas/:oid',
        component: DetallesVentasComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      },
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'tienda-datos',
        component: TiendaDatosComponent
      },
      {
        path: 'tienda-brand',
        component: TiendaBrandComponent
      },
      {
        path: 'money',
        component: MoneyComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
   },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
