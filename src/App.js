import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <Navigation />
      <About />
      <Project />
    </div>
  );
}

export default App;
