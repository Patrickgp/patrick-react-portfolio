import React from "react";
import Selfie from "../../assets/profile-pic.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row my-5">
          <h1 className="name">
            Patrick Poopathi{" "}
            <span className="title">| Full Stack Developer</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            turpis eu ante blandit faucibus ac non sem. Cras aliquet, dui sit
            amet scelerisque elementum, erat neque pellentesque erat, at.
          </p>
          <div className="my-2">
            <a className="button" href="#contact">
              Let's Chat
            </a>
            <a className="button" href="#projects">
              View My Past Work
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={Selfie}
            alt="Selfie of Patrick Poopathi"
            style={{
              width: "250px",
              borderRadius: "25px",
              border: "2px solid darkslateblue",
            }}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default About;
