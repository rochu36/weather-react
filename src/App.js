import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search />
        <footer>
          <a
            href="https://github.com/rochu36/weather-react"
            target="_blank"
            rel="noreferrer"
            className="App-link"
          >
            Open-source code
          </a>{" "}
          by Rosa Chu
        </footer>
      </div>
    </div>
  );
}

export default App;
