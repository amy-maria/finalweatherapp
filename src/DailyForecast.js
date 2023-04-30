import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DailyForecast.css";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showDaily(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div class="row row-cols-xs-2 row-cols-sm-5 justify-content-evenly">
        {forecast.map(function (forecast, index) {
          if (index >= 1 && index < 6) {
            return (
              <div className="col-xs-2 mt-2 " key={index}>
                <ForecastDay data={forecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let key = `9f93aofdc8e0492e30c4aetee787abea`;
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=imperial`;

    axios.get(url).then(showDaily);
    return null;
  }
}
