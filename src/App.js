import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
