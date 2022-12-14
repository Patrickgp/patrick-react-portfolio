import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// Will put this back in after submission. Not a fan of a footer for links
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand">
          <NavLink style={{ textDecoration: "none" }} to="home">
            Patrick Poopathi | Full Stack Developer
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: "none",
              })}
              to="home"
              className="nav"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: "none",
              })}
              to="about"
              className="nav"
            >
              About Me
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: "none",
              })}
              to="resume"
              className="nav"
            >
              Resume
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: "none",
              })}
              to="portfolio"
              className="nav"
            >
              Portfolio
            </NavLink>
            {/* <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: "none",
              })}
              to="contact"
              className="nav"
            >
              Contact Me
            </NavLink> */}
          </Nav>
          {/* Will put this back in after submission. Not a fan of a footer for links */}
          <span className="navbar-text">
            <div className="icon-bar">
              <a
                href="https://www.linkedin.com/in/patrick-poopathi/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="linkedIn mx-2" />
              </a>
              <a
                href="https://github.com/Patrickgp"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="github mx-2" />
              </a>
              <a
                href="mailto: patrickgpoopathi@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="email mx-2" />
              </a>
              <a
                href="https://docs.google.com/document/d/1ZQ4I23wDz76NyNfOFip_36UA2v7kApPlp7xhyplP7Mc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFile} className="resume mx-2" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
