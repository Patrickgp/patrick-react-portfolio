import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
