import React from "react";
import Navigation from "../Nav";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
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
        {/* Change Route path to Home after submission */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
