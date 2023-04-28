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
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      windDirection: response.data.wind.degree,
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
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={changeCity}
            />
            <input
              type="submit"
              class="btn btn-primary btn-sm"
              value="search"
            />
          </form>

          <div className="d-flex mt-3 flex-row border border-primary">
            <div className="p-2 col-6">
              <div className="todaysDateTime">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="currencity">{weatherData.currentCity}</div>
              <div className="description">
                Current conditions:
                {weatherData.weatherDescription}
              </div>
              <div>
                <img src={weatherData.iconURL} alt="weather_icon"></img>{" "}
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
            <br />
            <br />
            <div className="wind">
              Wind: {Math.round(weatherData.wind)} mph
              <WindDirection degree={weatherData.windDirection} />
            </div>
            <div className="humidity">Humidity: {weatherData.humidity} %</div>
          </div>
          <DailyForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading ....";
  }
}
