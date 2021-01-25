import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NomeComponenteComponent } from './nome-componente/nome-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
