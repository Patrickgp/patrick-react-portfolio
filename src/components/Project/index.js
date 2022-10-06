import React from "react";
import Nighthawk from "../../assets/images/Nighthawk.png";
import WeatherFlow from "../../assets/images/weatherFlow.png";
import CodingColumns from "../../assets/images/coding-columns.png";
import TheWholeTeam from "../../assets/images/the-whole-team.png";

const Project = () => {
  return (
    <section id="project" className="my-5">
      <div className="container">
        <div className="row">
          <h2 className="project-header my-5">My Projects</h2>

          <img
            className="project-img"
            src={Nighthawk}
            alt="Nighthawk: The Game, a side scroller game that allows you to compete with friends"
          ></img>

          <img
            className="project-img"
            src={WeatherFlow}
            alt="weatherFlow application that pairs weather conditions with popular music hits"
          ></img>

          <img
            className="project-img"
            src={CodingColumns}
            alt="A CMS style forum that lets you share thoughts with friends online"
          ></img>

          <img
            className="project-img"
            src={TheWholeTeam}
            alt="A team management application that lets you neatly retain contact information on your team"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Project;
