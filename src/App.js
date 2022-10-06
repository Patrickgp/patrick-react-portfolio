import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
