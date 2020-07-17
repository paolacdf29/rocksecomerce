import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

import { FiltroPipe } from './pipes/filtro.pipe';

import { AdminModule } from './pages/admin/admin.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HomeComponent,
    ContactoComponent,
    NavbarComponent,
    FooterComponent,
    ProductoComponent,
    CarritoComponent,
    FiltroPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
