import React, { useState } from "react";

export default function WeatherTemperature(props) {
  console.log(props);
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
      <div>
        <span className="temperature">{props.temperature}</span>
        <span className="unit">
          {""} F |
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </span>
      </div>
    );
  } else {
    let celsiusTemp = Math.round(((props.temperature - 32) * 5) / 9);
    console.log(celsiusTemp);
    return (
      <div>
        <span className="temperature">{celsiusTemp}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            {""} F
          </a>
          | C
        </span>
      </div>
    );
  }
}
