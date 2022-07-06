import classes from "./LaunchInfo.module.css";
import { Fragment } from "react";

const LaunchInfo = (props) => {
  return (
    <Fragment>
      <section className={classes.main}>
        <div className={classes.content}>
          <h2>{props.site_name}</h2>
          <p>
            {`
        ${props.location}is a launch pad for rockets located at the north end of  ${props.location}  Station,  ${props.country}.

        The launch pad was used by the United States Air Force for  ${props.title[0]} launches between 1965 and 2005. The facility underwent multiple upgrades including the design and construction of towers with retractable and foldable platforms for vehicle assembly, instrumentation and monitoring.${props.detail}

        After 2007, the US Air Force leased the complex to SpaceX to launch the ${props.title[0]} rocket.[1] As of May 2022, there have been ${props.attempt} launches of the ${props.title[0]} from the ${props.site_name}. out of the ${props.attempt} attempt ${props.success} were successful.To know more about this click here ${props.link}  `}
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default LaunchInfo;
