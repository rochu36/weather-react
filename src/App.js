import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
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
