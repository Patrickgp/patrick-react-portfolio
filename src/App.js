import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
