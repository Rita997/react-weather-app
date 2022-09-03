import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by Merita Ramadani. It is{" "}
          <a
            href="https://github.com/Rita997/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://63135d29ea02941e79f616f4--genuine-sundae-c7e01e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;