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
            Amy Rowell. Code available on GitHub.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
