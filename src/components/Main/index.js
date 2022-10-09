import React from "react";
import Navigation from "../Nav";
import Home from "../Home";
import About from "../About";
import Project from "../Project";
import Skill from "../Skill";
import Contact from "../Contact";
import Footer from "../Footer";

import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patrick-react-portfolio" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;