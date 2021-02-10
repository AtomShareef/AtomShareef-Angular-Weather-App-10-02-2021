import { Component, OnInit } from '@angular/core';
import { Profile } from '../weather/profile';
import { ProfileService } from '../weather/profile.service';
import { WeatherService } from '../weather/weather.service';
import { WeatherItem } from '../weather/weather-item';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  profiles: Profile[];

  constructor(private _profileService: ProfileService, private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this.profiles = this._profileService.getProfiles();
  }

  onSaveNew(){
    const cities = this._weatherService.getWeatherItems().map(
      function(element: WeatherItem){
        return element.cityName;
      }
    );
    this._profileService.saveNewProfile(cities);
  }

  onLoadProfile(profile: Profile){
    this._weatherService.clearWeatherItems();
    for (let i = 0; i < profile.cities.length; i++) {
      this._weatherService.searchWeatherData(profile.cities[i])
      .pipe(retry())
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp );
          this._weatherService.addWeatherItem(weatherItem);
        }
      );
    }
  }

  onDeleteProfile(event: Event, profile: Profile){
    event.stopPropagation();
    this._profileService.deleteProfile(profile);
  }
}
