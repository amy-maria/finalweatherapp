import React from "react";
import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="new york" />
      </div>
      <footer className="fixed-bottom text-center">
        Weather app code available on
        <a
          href="https://github.com/amy-maria/finalweatherapp"
          alt="link to GitHub site for project code"
        >
          {" "}
          GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
