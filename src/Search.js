import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WindDirection from "./WindDirection";
import WeatherTemperature from "./WeatherTemperature";
import FeelsLikeTemperature from "./FeelsLikeTemperature";
import DailyForecast from "./DailyForecast";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showForecast(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      //windGust: response.data.wind.gust,
      windDirection: response.data.wind.degree,
      //trying to convert degrees to direction
      //sunrise: new Date(response.data.sys.sunrise * 1000),
      //sunset: new Date(response.data.sys.sunset * 1000),
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      currentCity: response.data.city,
      iconURL: response.data.condition.icon_url,
      weatherDescription: response.data.condition.description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let key = `9f93aofdc8e0492e30c4aetee787abea`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=imperial`;
    axios.get(url).then(showForecast);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={changeCity}
          />
          <input type="submit" value="search" />
        </form>

        <div className="d-flex mt-3 flex-row border border-primary">
          <div className="p-2 col-6">
            <div className="todaysDateTime">
              <FormattedDate date={weatherData.date} />
            </div>
            <div className="currencity">
              Current conditions for {weatherData.currentCity},
            </div>
            <div className="description">{weatherData.weatherDescription}</div>
            <div className="currentTemp mx-auto p-2">
              <img src={weatherData.iconURL} alt="weather_icon"></img>
              <div>
                <WeatherTemperature
                  temperature={Math.round(weatherData.temp)}
                />
              </div>
              <div className="feelsLike">
                <FeelsLikeTemperature
                  temp={Math.round(weatherData.feelsLike)}
                />
              </div>
            </div>
          </div>
          <div className="p-2 col-6">
            <div className="wind">
              Wind: {Math.round(weatherData.wind)} mph
              <WindDirection degree={weatherData.windDirection} />
            </div>

            <div className="humidity">Humidity: {weatherData.humidity} %</div>
            <br />
            <br />
          </div>
        </div>
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading ....";
  }
}
