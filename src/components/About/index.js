import React from "react";
import Profile from "../../assets/images/profile-pic.jpg";

const About = () => {
  return (
    <section id="about" className="my-5">
      <div className="container">
        <div className="row">
          <h2 className="about-header my-5 d-flex justify-content-center">
            About Me
          </h2>
          <div
            justify
            className="aboutme d-flex justify-content-center flex-wrap"
          >
            <img
              className="profile-pic"
              src={Profile}
              alt="Patrick Poopathi"
            ></img>
            <p className="profile-info mx-5">
              Front-end web developer with extensive experience in sales &
              marketing able to provide unique insight into user experiences,
              achieving benchmarks and driving focuses. Recently earning a
              certificate in full stack development from Butler University
              Coding, with developed skills in JavaScript, CSS, React.js, and
              responsive web design. Strengths in creativity, problem solving,
              and persistence. Passionate about developing web applications that
              create impactful user experiences and increasing my skill-set.
              Given the opportunity, my passion for learning, teaching and
              creative problem solving paired would make me a strong addition to
              your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
