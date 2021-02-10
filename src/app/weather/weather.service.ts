import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WEATHER_ITEMS } from './weather.data';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/Rx'
// import { Response, Http } from '@angular/common/http';
import { WeatherItem } from './weather-item';

@Injectable()
export class WeatherService{

  constructor(private _http: HttpClient){}

  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any>{
    return this._http
    .get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=5de33cc2b7f61a59f2a5e30dbae9b6b7&units=metric')
    .pipe(
      map((responseData: Response) => {
        responseData.json;
        return responseData;
      }
      ,
      catchError(error => {
        console.error(error);
        // console.log("inside catchError");
        return Observable.throw(error.message);
      })
      ));
      // catchError(error => {
      //   console.error(error);
      //   return Observable.throw(error.json())
      // }));
  }

  clearWeatherItems(){
    WEATHER_ITEMS.splice(0);
  }
}
