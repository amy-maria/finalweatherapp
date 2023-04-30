import React, { useState } from "react";

export default function FeelsLikeTemperature(props) {
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
        Feels like: {props.temp}{" "}
        <span className="unit">
          {""} °F|
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsiusTemp = Math.round(((props.temp - 32) * 5) / 9);

    return (
      <span>
        Feels like: {celsiusTemp}{" "}
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            {""} °F
          </a>
          |°C
        </span>
      </span>
    );
  }
}
