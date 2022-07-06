import classes from "./RocketItem.module.css";
import { Link } from "react-router-dom";

const RocketItem = (props) => {
  return (
    <li className={classes.list}>
      <h2>{props.title}</h2>
      <p>{props.detail}</p>
      <Link className={classes.btn} to={`/rockets/${props.id}`}>
        View more
      </Link>
    </li>
  );
};

export default RocketItem;
