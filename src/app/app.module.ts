import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    LoginComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2GoogleChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvHMk7JaeCB6MtTJb9Z-CZyzigf2LDPOU',
      libraries: ['places']
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
