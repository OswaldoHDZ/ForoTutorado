import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteBarraSuperiorComponent } from './componenteBarraSuperior/componenteBarraSuperior.component';
import { CompTemasAgregadosComponent } from './comp-temasAgregados/comp-temasAgregados.component';

@NgModule({
   declarations: [
      AppComponent,
      ComponenteBarraSuperiorComponent,
      CompTemasAgregadosComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
