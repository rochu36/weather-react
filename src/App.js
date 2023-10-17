import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
      </header>
      <p>
        <a
          href="https://github.com/rochu36/weather-react"
          target="_blank"
          rel="noreferrer"
          className="App-link"
        >
          Open-source code
        </a>{" "}
        by Rosa Chu
      </p>
    </div>
  );
}

export default App;
