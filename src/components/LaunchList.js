import { Fragment } from "react";
import classes from "./LaunchList.module.css";
import LaunchItem from "./LaunchItem";

const LaunchList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.launches.map((launch) => (
          <LaunchItem
            key={launch.id}
            id={launch.id}
            title={launch.title}
            location={launch.location}
            country={launch.country}
          />
        ))}
      </ul>
    </Fragment>
  );
};
export default LaunchList;
