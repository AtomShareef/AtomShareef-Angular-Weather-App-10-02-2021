import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { WeatherItem } from '../weather/weather-item';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { WEATHER_ITEMS } from '../weather/weather.data';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  private searchStream = new Subject<string>();

  data: any = {};

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    // this.searchStream
    // .pipe(
    //   debounceTime(500),
    //   switchMap((input :string) => this._weatherService.searchWeatherData(input)),
    //   distinctUntilChanged()
    // )
    // .subscribe(
    //   data => this.data = data
    //   // console.log(data),
    //     // return data;
    // )
  }

  // onSubmit(form: NgForm){
  onSubmit(){
    // console.log(form);

    // this._weatherService.searchWeatherData(form.value.city)
    // .subscribe(
    //   data => {
        // const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp );
        // this._weatherService.addWeatherItem(weatherItem);
    //   }
    // );
    const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp );
    this._weatherService.addWeatherItem(weatherItem);
  }

  onSearchLocation(cityName: string){
    //  this.searchStream.next(cityName);

    //  return this.searchStream.next(cityName);
    // // .next(cityName);

    this.searchStream
    .pipe(
      debounceTime(500),
      switchMap((input :string) => this._weatherService.searchWeatherData(input)),
      distinctUntilChanged()
    )
    .subscribe(
      data => this.data = data
      // console.log(data),
        // return data;
    )
    this.searchStream.next(cityName);

  }

  onClearCity(){
    WEATHER_ITEMS.splice(0);
  }
}
