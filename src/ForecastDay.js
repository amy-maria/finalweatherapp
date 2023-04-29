import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return `${days[day]}`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}° `;
  }
  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  return (
    <div className="card-body">
      <h5 className="card-title text-center">{day()}</h5>
      <img
        src={props.data.condition.icon_url}
        alt="weather icon"
        className="img-fluid"
      ></img>
      <ul className="DailyForecast-temp">
        <li className="text-center">{minTemp()}</li>
        <li className="text-center">{maxTemp()}</li>
      </ul>
    </div>
  );
}
