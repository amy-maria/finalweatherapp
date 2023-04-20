import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import SunriseTime from "./SunriseTime";
import SunsetTime from "./SunsetTime";
import WindDirection from "./WindDirection";
import WindGust from "./WindGust";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showForecast(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      windGust: response.data.wind.gust,
      windDirection: response.data.wind.deg,
      //trying to convert degrees to direction
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      currentCity: response.data.name,
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      weatherDescription: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let key = "caa883a4a60d93878755b08a933f74ea";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
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
              {" "}
              <FormattedDate date={weatherData.date} />
            </div>
            <div className="currencity">
              Current conditions for {weatherData.currentCity}
            </div>
            <div className="description">{weatherData.weatherDescription}</div>
            <div className="currentTemp">
              {" "}
              <img src={weatherData.iconURL} alt="weather_icon" />
              {Math.round(weatherData.temp)} F
              <span className="celsius"> C</span>
            </div>
            <div className="feelsLike">
              Feels like: {Math.round(weatherData.feelsLike)} F{" "}
              <span className="celsius"> C</span>
            </div>
          </div>
          <div className="p-2 col-6">
            <div className="wind">
              Wind: {Math.round(weatherData.wind)} mph{" "}
              <WindDirection degree={weatherData.windDirection} />
            </div>
            <div className="windGust">
              <WindGust gust={Math.round(weatherData.windGust)} />
            </div>
            <div className="humidity">Humidity: {weatherData.humidity} %</div>
            <br />
            <br />
            <div className="timeSunrise">
              Sunrise:
              <SunriseTime time={weatherData.sunrise} />
            </div>
            <div className="timeSunset">
              Sunset: <SunsetTime time={weatherData.sunset} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Weather is loading ...";
  }
}
