import React, { useState } from "react";

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
    return `
        ${props.temperature}
          {""} F |
          <a href="/" onClick={showCelsius}>
            C
          </a>`;
  } else {
    let celsiusTemp = Math.round(((props.temperature - 32) * 5) / 9);
    return `
       ${celsiusTemp}<a href="/" onClick={showFahrenheit}>
            {""} F
          </a>
          | C`;
  }
}
