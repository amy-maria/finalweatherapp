import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showForecast(response) {
    console.log(response.data);
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={changeCity} />
        <input type="submit" value="search" />
      </form>
      <div className="d-flex mt-3 flex-row border border-primary">
        <div className="p-2 col-6">
          <div className="todaysDate"> As of April 18, 2023</div>
          <div className="todayTime">22:11</div>
          <div className="currencity">Current conditions for New York</div>
          <div className="weatherDescription">Cloudy</div>

          <div div className="currentTemp">
            {" "}
            50 F<span className="celsius"> C</span>
          </div>
          <div className="feelsLike">
            Feels like: 45 F <span className="celsius"> C</span>
          </div>
        </div>
        <div className="p-2 col-6">
          <div className="wind">Wind: 10 mph </div>
          <div className="windGust">Wind gust: 5 mph</div>
          <div className="humidity">Humidity: 25 %</div>
          <br />
          <br />
          <div className="timeSunrise">Sunrise: 06:30</div>
          <div className="timeSunset">Sunset: 19:00 </div>
        </div>
      </div>
    </div>
  );
}
