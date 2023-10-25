import React from "react";

export default function FormattedDateTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dt.getDay()];

  let hours = props.dt.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.dt.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
