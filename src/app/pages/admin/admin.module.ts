import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetallesVentasComponent } from './detalles-ventas/detalles-ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TiendaDatosComponent } from './tienda-datos/tienda-datos.component';
import { TiendaBrandComponent } from './tienda-brand/tienda-brand.component';
import { MoneyComponent } from './money/money.component';


@NgModule({
  declarations: [
    AdminComponent,
    VentasComponent,
    DetallesVentasComponent,
    ProductosComponent,
    ReportesComponent,
    TiendaDatosComponent,
    TiendaBrandComponent,
    MoneyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
