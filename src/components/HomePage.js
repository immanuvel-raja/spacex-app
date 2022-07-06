import React from "react";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.overlay}></div>
      {/* <video src={videobg} autoPlay loop muted /> */}

      <div className={classes.content}>
        <h1>Welcome to spaceX</h1>
        <p>
          Space Exploration Technologies Corp. is an American spacecraft
          manufacturer, space launch provider, and a satellite communications
          corporation headquartered in Hawthorne, California. SpaceX was founded
          in 2002 by Elon Musk, with the goal of reducing space transportation
          costs to enable the colonization of Mars
        </p>
      </div>
    </div>
  );
};

export default HomePage;
