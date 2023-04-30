import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        {props.temperature}°
        <span className="units">
          {""} F|
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </span>
      </span>
    );
  } else {
    let celsiusTemp = Math.round(((props.temperature - 32) * 5) / 9);
    return (
      <span>
        {celsiusTemp}°{""}
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            {" "}
            F
          </a>
          |{""}C
        </span>
      </span>
    );
  }
}
