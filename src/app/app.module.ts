import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AdminModule } from './pages/admin/admin.module';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { TrackerComponent } from './pages/tracker/tracker.component';


import { FiltroPipe } from './pipes/filtro.pipe';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestoreModule} from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFireModule } from 'angularfire2';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './pages/info/info.component'



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
    PagosComponent,
    TrackerComponent,
    InfoComponent,
    //AngularFireAuth
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    //AngularFireAuth,
    AngularFireStorageModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
