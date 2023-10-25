import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "metric") {
    return (
      <span className="CurrentTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="CurrentTemperature">
        <span className="temperature">{convertToFahrenheit()}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
