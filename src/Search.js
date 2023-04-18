import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  //const [message, setMessage] = useState("");

  function showForecast(response) {
    console.log(response.data);

    let date = new Date(response.data.dt * 1000);
    let temp = Math.round(response.data.main.temp);
    let wind = Math.round(response.data.wind.speed);
    let windGust = Math.round(response.data.wind.gust);
    //let windDirection = response.data.wind.deg;
    //trying to convert degrees to direction
    let sunrise = response.data.sys.sunrise * 1000;
    let sunset = response.data.sys.sunset * 1000;
    let feelsLike = Math.round(response.data.main.feels_like);
    let humidity = response.data.main.humidity;
    let currentCity = response.data.name;
    let icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let weatherDescription = response.data.weather[0].main;
    let formattedDate = Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
    }).format(date);
    let formattedTime = Intl.DateTimeFormat("en-US", {
      timeStyle: "long",
    }).format(date);
    let dr = new Date(sunrise);
    let ds = new Date(sunset);
    let timeSunrise = Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "long",
    }).format(dr);
    let timeSunset = Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "long",
    }).format(ds);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = "caa883a4a60d93878755b08a933f74ea";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    axios.get(url).then(showForecast);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="currentWeather">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={changeCity} />
        <input type="submit" value="search" />
      </form>
      <div className="d-flex mt-3 flex-row border border-primary">
        <div className="p-2 col-6">
          <div className="todaysDate"> As of {formattedDate}</div>
          <div className="todayTime">{formattedTime}</div>
          <div className="currencity">Current conditions for {currentCity}</div>
          <div className="weatherDescription">{weatherDescription}</div>
          <img src={icon} alt="icon" aria-hidden="true" className="icon" />
          <div div className="currentTemp">
            {" "}
            {temp} F<span className="celsius"> C</span>
          </div>
          <div className="feelsLike">
            Feels like: {feelsLike} F <span className="celsius"> C</span>
          </div>
        </div>
        <div className="p-2 col-6">
          <div className="wind">Wind: {wind} mph </div>
          <div className="windGust">Wind gust: {windGust} mph</div>
          <div className="humidity">Humidity: {humidity} %</div>
          <br />
          <br />
          <div className="timeSunrise">Sunrise: {timeSunrise}</div>
          <div className="timeSunset">Sunset: {timeSunset}</div>
        </div>
      </div>
    </div>
  );
}
