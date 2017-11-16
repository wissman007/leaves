import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {AdministrationModule} from "./administration/administration.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HeaderModule,
    AdministrationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
