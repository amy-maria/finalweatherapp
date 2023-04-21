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
      <div>
        Feels like: {props.temp}{" "}
        <span className="unit">
          {""} F |
          <a href="/" onClick={showCelsius}>
            C
          </a>
        </span>
      </div>
    );
  } else {
    let celsiusTemp = Math.round(((props.temp - 32) * 5) / 9);

    return (
      <div>
        Feels like: {celsiusTemp}{" "}
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
