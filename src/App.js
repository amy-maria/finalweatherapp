import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="app-day">
        <div className="container">
          <h1>Weather App</h1>
          <Search defaultCity="new york" />
          <footer className="App-footer">
            Code available on{" "}
            <a
              href="https://github.com/amy-maria/finalweatherapp"
              alt="link to GitHub site for project code"
            >
              GitHub.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
