import { Component, OnInit, Directive } from '@angular/core';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherItem } from '../weather/weather-item';
import { WEATHER_ITEMS } from '../weather/weather.data';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {

  //list of weather items
  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    // this.weatherItems = WEATHER_ITEMS;
    this.weatherItems = this._weatherService.getWeatherItems();

  }

}
