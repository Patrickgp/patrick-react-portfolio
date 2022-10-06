import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          Patrick Poopathi | Full Stack Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              My Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Me
            </Nav.Link>
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
