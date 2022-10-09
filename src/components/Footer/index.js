import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Navbar expand="lg" fixed="bottom" className="bottom-bar">
      <Container className="bottom d-flex justify-content-center">
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
            <a
              href="https://stackoverflow.com/users/20094635/patrick-poopathi"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faStackOverflow}
                className="stackOverflow mx-2"
              />
            </a>
          </div>
        </span>
      </Container>
    </Navbar>
  );
};

export default Footer;
