import { Fragment } from "react";
import classes from "./RocketList.module.css";
import RocketItem from "./RocketItem";

const RocketList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.rockets.map((rocket) => (
          <RocketItem
            key={rocket.id}
            id={rocket.id}
            title={rocket.title}
            detail={rocket.detail}
          />
        ))}
      </ul>
    </Fragment>
  );
};
export default RocketList;
