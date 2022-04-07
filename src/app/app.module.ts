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
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxDoughnutChartModule,
	IgxRingSeriesModule,
	IgxLegendModule,
	IgxItemLegendModule,
  IgxCategoryChartModule
 } from "igniteui-angular-charts";
import { CategoryAreaChart } from './category-area-chart/category-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    LoginComponent,
    PieChartComponent,
    MainComponent,
    DashboardComponent,
    LoaderComponent,
    CategoryAreaChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2GoogleChartsModule,
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
    IgxLegendModule,
    IgxItemLegendModule,
    IgxCategoryChartModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvHMk7JaeCB6MtTJb9Z-CZyzigf2LDPOU',
      libraries: ['places']
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
