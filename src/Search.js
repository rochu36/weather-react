import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState(null);
  const [displayResult, setDisplayResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayResult(<Weather city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter city here"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      {displayResult}
    </div>
  );
}
