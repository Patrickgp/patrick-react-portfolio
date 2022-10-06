import React from "react";

const Skill = () => {
  return (
    <section id="skill">
      <div className="container">
        <div className="row">
          <h2 className="project-header my-5 d-flex justify-content-center">
            My Skills
          </h2>
          <div className="d-flex justify-content-center">
            <ul className="skillsList">
              <li>HTML, CSS, JS</li>
              <li>React.js</li>
              <li>Bootstrap, Materialize, Tailwind</li>
              <li>jQuery</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>MySQL & Sequelize ORM</li>
              <li>MongoDB & Mongoose ODM</li>
              <li>restAPI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
