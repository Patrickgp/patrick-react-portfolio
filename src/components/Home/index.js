import React from "react";
import SpaceMan from "../../assets/images/spaceman.jpeg";

const Home = () => {
  return (
    <section className="home">
      <div className="container-fluid bg">
        <div className="row">
          <img
            className="wallpaper"
            src={SpaceMan}
            alt="Astronaut floating in space"
          ></img>
          <h1 className="cta">It always seems impossible until it's done.</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
