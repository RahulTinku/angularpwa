import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	city : string;
	showWeather : any;
	errorCode : any;
	showForcast : any;
	forecastList : any;

  constructor(private _weatherService : WeatherService) { }

  ngOnInit() {
  }

  getWeather(){
  	this._weatherService.getWeather(this.city)
  		.subscribe(response => 	{
  			this.showWeather = response;
  			this.errorCode = false;
  		},
  		error => {
  			this.errorCode = error;
  			this.showWeather = undefined;
  		});
  }

  forcast() {
  	this._weatherService.forcastWeather(this.city)
  		.subscribe(response => {
  			this.showForcast = response;
  			this.forecastList = response.list;
  			this.errorCode = false;
  		},
  		error => {
  			this.showForcast = undefined;
  			this.errorCode = error;
  		})
  }

}
