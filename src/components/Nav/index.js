import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="brand" href="home">
          Patrick Poopathi | Full Stack Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <NavLink to="home" className="nav">
              Home
            </NavLink>
            <NavLink to="about" className="nav">
              About Me
            </NavLink>
            <NavLink to="skill" className="nav">
              Resume
            </NavLink>
            <NavLink to="project" className="nav">
              Portfolio
            </NavLink>
            <NavLink to="contact" className="nav">
              Contact Me
            </NavLink>
          </Nav>
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
