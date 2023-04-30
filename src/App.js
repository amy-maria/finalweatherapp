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
      <footer className="footer fixed-bottom text-center">
        Project by Amy Rowell. Weather app code available on
        <a
          href="https://github.com/amy-maria/finalweatherapp"
          alt="link to GitHub site for project code"
        >
          {" "}
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://helpful-figolla-5fbcfd.netlify.app"
          alt="link to Netlify site for weather app"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
