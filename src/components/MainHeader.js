import classes from "./MainHeader.module.css";

import Rocket from "../Assets/images/rocket-512.png";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={Rocket} alt="" />
        SpaceX
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/rockets">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/launches">
              Launches
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
