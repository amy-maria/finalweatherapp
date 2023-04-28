import React from "react";

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
    <div className="flip-card text-center">
      <div className="flip-card-inner">
        <div className="flip-card-front ">
          <div className="DailyForecast-day">{day()}</div>
          <img
            src={props.data.condition.icon_url}
            alt="weather icon"
            className="img-fluid"
          ></img>
          <div className="DailyForecast-temp">
            <div>
              {minTemp()}
              {maxTemp()}
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="DailyForecast-description text-capitalize">
            {props.data.condition.description}
          </div>
          <div className="DailyForecast-wind">
            Wind:{Math.round(props.data.wind.speed)} mph
          </div>
          <div className="DailyForecast-humidity">
            Humidity: {props.data.temperature.humidity}%
          </div>
        </div>
      </div>
    </div>
  );
}
