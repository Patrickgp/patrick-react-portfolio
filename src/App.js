import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div className="app">
      <Navigation />
      <main>
        <Home />
        <About />
        <Skill />
        <Project />
      </main>
    </div>
  );
}

export default App;
