import React, { useState } from "react";
import axios from "axios";
import "./DailyForecast.css";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showDaily(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="col-sm-2">
        <ForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    console.log(props);
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let key = `9f93aofdc8e0492e30c4aetee787abea`;
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=imperial`;

    axios.get(url).then(showDaily);
    return null;
  }
}
