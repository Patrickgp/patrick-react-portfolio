import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="my-5">
      <div className="container">
        <div className="row">
          <h2 className="project-header my-5 d-flex justify-content-center">
            Resume
          </h2>
          <div className="patricksResume">
            <a
              href="https://docs.google.com/document/d/1ZQ4I23wDz76NyNfOFip_36UA2v7kApPlp7xhyplP7Mc/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Click to download Resume
            </a>
          </div>
          <h2 className="project-header my-5 d-flex justify-content-center">
            My Skills
          </h2>
          <div className="d-flex justify-content-center my-5">
            <ul className="skillsList">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
              <li>Tailwind</li>
              <li>jQuery</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>MySQL </li>
              <li>Sequelize ORM</li>
              <li>NoSQL</li>
              <li>jQuery</li>
              <li>AJAX</li>
              <li>MongoDB</li>
              <li>Mongoose ODM</li>
              <li>restAPI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
