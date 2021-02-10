import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherItemDirective } from './weather-item/weather-item.directive';
import { WeatherListDirective } from './weather-list/weather-list.directive';
import { WeatherService } from './weather/weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { FormsModule } from '@angular/forms';
import { WeatherSearchDirective } from './weather-search/weather-search.directive';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileService } from './weather/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherItemDirective,
    WeatherListDirective,
    WeatherSearchComponent,
    WeatherSearchDirective,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProfileService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
