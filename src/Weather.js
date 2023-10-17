import React, { useState } from "react";
import axios from "axios";

function Weather(props) {
  const [searchResult, setSearchResult] = useState({});

  function displayWeather(response) {
    setSearchResult({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <div>
      <h1>{searchResult.name}</h1>
      <ul>
        <li>Temperature: {Math.round(searchResult.temperature)}°C</li>
        <li>Description: {searchResult.description}</li>
        <li>Humidity: {searchResult.humidity}%</li>
        <li>Wind: {searchResult.wind}km/h</li>
        <li>
          <img src={searchResult.icon} alt={searchResult.description} />
        </li>
      </ul>
    </div>
  );
}

export default Weather;
