import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from '../weather/weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
  // inputs: ['weatherItem: item']
})
export class WeatherItemComponent implements OnInit {

  // weatherItem: WeatherItem;
  @Input('item') weatherItem: WeatherItem;


  // constructor() {
  //   this.weatherItem = new WeatherItem('Chikmagaluru','Mostly Sunny',27);
  // }

  ngOnInit(): void {
  }

}
