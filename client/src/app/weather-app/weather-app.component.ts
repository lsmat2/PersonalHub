import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherApiService } from './weather-api.service';
import { WeatherData } from './weather-data';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})

export class WeatherAppComponent {
    weatherData = new WeatherData();

    constructor (private weatherService: WeatherApiService) {}

    ngOnInit() {
        this.startUp();
        console.log(this.weatherData);
    }

    // Acquire data on startup
    startUp() {
        this.weatherService.getCurrentWeather().subscribe({
            next: (data: JSON) => {
                this.weatherData = this.weatherService.setData(data);
            },
            error: (err: HttpErrorResponse) => {}
        });
    }
}
