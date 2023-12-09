import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WeatherData } from './weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

    private apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=champaign,usa&appid=dcdf9acf91857f1abb437d742396bb0d";

    constructor(private http: HttpClient) { }

    public getCurrentWeather(): Observable<JSON> {
        return this.http.get<JSON>(this.apiUrl);
    }

    private toFahrenheit(temp: any) {
        return (((temp - 273.15) * (9/5)) + 32);
    }

    public setData(data: any): WeatherData {
        let weatherData: WeatherData = data;

        // Lets us determine wether we are day / night
        let sunriseTime = new Date(data.sys.sunrise * 1000);
        let sunsetTime = new Date(data.sys.sunset * 1000);
        let currentDate = new Date();
        weatherData.isDay = ( (sunriseTime.getTime() <= currentDate.getTime()) && (currentDate.getTime() <= sunsetTime.getTime()) );

        // Temperature data to display in Fahrenheit
        weatherData.tempCurr = this.toFahrenheit(data.main.temp).toFixed(0);
        weatherData.tempFeelsLike = this.toFahrenheit(data.main.feels_like).toFixed(0);
        weatherData.tempMin = this.toFahrenheit(data.main.temp_min).toFixed(0);
        weatherData.tempMax = this.toFahrenheit(data.main.temp_max).toFixed(0);

        // Visibility
        weatherData.sight = (data.visibility / 1609).toFixed(1);

        // Wind speed
        weatherData.windSpeed = (data.wind.speed / 2.237).toFixed(0);

        // Wind Direction
        let direction = (360 - data.wind.deg) % 360;
        let cardinal = "NONE";

        if (direction < 23) { cardinal = "N"; }
        else if (direction <= 68) { cardinal = "NE"; }
        else if (direction < 113) { cardinal = "E"; }
        else if (direction <= 158) { cardinal = "SE"; }
        else if (direction < 203) { cardinal = "S"; }
        else if (direction <= 248) { cardinal = "SW"; }
        else if (direction < 293) { cardinal = "W"; }
        else if (direction <= 338) { cardinal = "NW"; }
        else { cardinal = "N"; }
        weatherData.direction = cardinal;

        // Saving cloud and humidity data in weatherData class
        weatherData.clouds = data.clouds.all;
        weatherData.humidity = data.main.humidity;

        return weatherData;
    }
}
