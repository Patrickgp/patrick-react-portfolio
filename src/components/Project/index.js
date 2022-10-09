import React from "react";
import Nighthawk from "../../assets/images/Nighthawk.png";
import WeatherFlow from "../../assets/images/weatherFlow.png";
import CodingColumns from "../../assets/images/coding-columns.png";
import TheWholeTeam from "../../assets/images/the-whole-team.png";
import CodeQuiz from "../../assets/images/Code-Quiz.png";
import CollectiveReaction from "../../assets/images/Collective-Reaction.png";

const Project = () => {
  return (
    <section id="project" className="my-5">
      <div className="container">
        <div className="row">
          <h2 className="project-header my-5 d-flex justify-content-center">
            Portfolio
          </h2>
          {/* Start of Nighthawk project */}
          <div className="project-row mb-5">
            <a
              href="https://fast-ridge-15962.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-img"
                src={Nighthawk}
                alt="Nighthawk: The Game, a side scroller game that allows you to compete with friends"
              ></img>
            </a>
            <div className="project-title">
              <h3>Nighthawk: The Game</h3>
              <p>
                <i>
                  A side scroller survival game with the ability to share and
                  comment with friends.
                </i>
              </p>
            </div>
            <div className="skill-column">
              <h5 className="my-4">Tech used in program:</h5>
              <ul className="skillsList">
                <li>HTML, CSS, JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Sequelize ORM</li>
                <li>MySQL</li>
                <li>Handlebars.js</li>
                <li>Bcrypt</li>
                <li>restAPI</li>
              </ul>
            </div>
          </div>
          {/* End of Nighthawk project */}

          {/* Start of weatherFlow project */}
          <div className="project-row my-5">
            <a
              href="https://patrickgp.github.io/Spotify-Weather-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-img"
                src={WeatherFlow}
                alt="An application that provides playlists based on weather
                conditions of a user searched city."
              ></img>
            </a>
            <div className="project-title">
              <h3>weatherFlow</h3>
              <p>
                <i>
                  An application that provides playlists based on weather
                  conditions of a user searched city.
                </i>
              </p>
            </div>
            <div className="skill-column">
              <h5 className="my-4">Tech used in program:</h5>
              <ul className="skillsList">
                <li>HTML, CSS, JavaScript</li>
                <li>Materialize CSS</li>
                <li>Spotify API</li>
                <li>OpenWeatherMaps API</li>
                <li>Figma Wire Framing</li>
              </ul>
            </div>
          </div>
          {/* End of weatherFlow project */}

          {/* Start of Coding Columns project */}
          <div className="project-row my-5">
            <a
              href="https://intense-fjord-66450.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-img"
                src={CodingColumns}
                alt="CMS-style blog site where users can create accounts and publish articles, blog posts, thoughts and opinions."
              ></img>
            </a>
            <div className="project-title">
              <h3>Coding Columns</h3>
              <p>
                <i>
                  CMS-style blog site where users can create accounts and share
                  thoughts and reactions.
                </i>
              </p>
            </div>
            <div className="skill-column">
              <h5 className="my-3">Tech used in program:</h5>
              <ul className="skillsList">
                <li>HTML, CSS, JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Sequelize ORM</li>
                <li>MySQL</li>
                <li>Handlebars.js</li>
                <li>Bcrypt</li>
                <li>restAPI</li>
              </ul>
            </div>
          </div>
          {/* End of Coding Columns project */}

          {/* Start of Collective Reaction project */}
          <div className="project-row my-5">
            <a
              href="https://github.com/Patrickgp/Collective-Reaction"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-img"
                src={CollectiveReaction}
                alt="CMS-style blog site where users can create accounts and publish articles, blog posts, thoughts and opinions."
              ></img>
            </a>
            <div className="project-title">
              <h3>Collective Reaction</h3>
              <p>
                <i>
                  An API for a social network web application utilizing NoSQL.
                </i>
              </p>
            </div>
            <div className="skill-column">
              <h5 className="my-3">Tech used in program:</h5>
              <ul className="skillsList">
                <li>HTML, CSS, JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
                <li>restAPI</li>
              </ul>
            </div>
          </div>
          {/* End of Collective Reaction project */}

          {/* Start of The Whole Team project */}
          <div className="project-row my-5">
            <a
              href="https://github.com/Patrickgp/the-whole-team"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-img"
                src={TheWholeTeam}
                alt="Created to better manage employee information through Inquirer prompts. Inputted information will then be dynamically generated as cards."
              ></img>
            </a>
            <div className="project-title">
              <h3>Collective Reaction</h3>
              <p>
                <i>
                  Created to better manage employee information through Inquirer
                  prompts.
                </i>
              </p>
            </div>
            <div className="skill-column">
              <h5 className="my-3">Tech used in program:</h5>
              <ul className="skillsList">
                <li>HTML, CSS, JavaScript</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>Inquirer.js</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
          {/* End of The Whole Team project */}

          {/* Start of Code Quiz project */}
          <div className="project-row my-5">
            <a
              href="https://intense-fjord-66450.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-img"
                src={CodeQuiz}
                alt="CMS-style blog site where users can create accounts and publish articles, blog posts, thoughts and opinions."
              ></img>
            </a>
            <div className="project-title">
              <h3>CodeQuiz</h3>
              <p>
                <i>
                  A timed JavaScript fundamental quiz game that allows you to
                  store your high score locally.
                </i>
              </p>
            </div>
            <div className="skill-column">
              <h5 className="my-3">Tech used in program:</h5>
              <ul className="skillsList">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          {/* End of Code Quiz project */}
        </div>
      </div>
    </section>
  );
};

export default Project;
