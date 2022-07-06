import { Link } from "react-router-dom";
import classes from "./LaunchItem.module.css";

const LaunchItem = (props) => {
  return (
    <section className={classes.main}>
      <div className={classes.list}>
        <h2>{props.title}</h2>
        <p>{props.location}</p>
        <p>{props.country}</p>
      </div>
      <Link className={classes.btn} to={`/launches/${props.id}`}>
        View more
      </Link>
    </section>
  );
};

export default LaunchItem;
