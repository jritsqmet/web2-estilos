import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabVarComponent } from './components/nab-var/nab-var.component';
import { HomeComponent } from './screens/home/home.component';
import { Vista1Component } from './screens/vista1/vista1.component';
import { Vista2Component } from './screens/vista2/vista2.component';
import { Vista3Component } from './screens/vista3/vista3.component';

@NgModule({
  declarations: [
    AppComponent,
    NabVarComponent,
    HomeComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
