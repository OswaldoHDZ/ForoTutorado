import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { BarraSuperiorComponent } from './barraSuperior/barraSuperior.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CrearTemaComponent } from './crearTema/crearTema.component';
import { TemasComponent } from './temas/temas.component';
@NgModule({
   declarations: [
      AppComponent,
      CustomerComponent,
      CustomerDetailsComponent,
      AddCustomerComponent,
      BarraSuperiorComponent,
      ComentariosComponent,
      CrearTemaComponent,
      TemasComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
