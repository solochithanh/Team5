import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { MapComponent } from './components/map/map.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HeaderComponent } from './components/header/header.component';
import { RegionComponent } from './components/region/region.component';
import { WorldwideComponent } from './components/worldwide/worldwide.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MapComponent,
    DashBoardComponent,
    HeaderComponent,
    RegionComponent,
    WorldwideComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
