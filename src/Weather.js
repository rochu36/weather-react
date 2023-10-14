import React from "react";
import axios from "axios";
import { Dna } from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}°C.`
    );
  }

  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
  return (
    <Dna
      visible={true}
      height="200"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}
