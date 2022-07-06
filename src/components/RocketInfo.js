import { Fragment } from "react";
import classes from "./RocketInfo.module.css";

const RocketInfo = (props) => {
  return (
    <Fragment>
      <section className={classes.main}>
        <div className={classes.content}>
          <h2>{props.name}</h2>
          <p>
            {`
        ${props.name} is produced by ${props.company}, an ${props.country} aerospace manufacturer. The rocket has ${props.stages} stages, with the first stage capable of landing vertically. This feat was achieved for the first time on ${props.first_fly}. Since then,  ${props.company} has successfully landed boosters over a hundred times, with individual first stages flying as many as thirteen times.Main purpose of this ${props.detail}

        Both the first and second stages are powered by ${props.company}  ${props.engine} engines, using  ${props.fuel_1} and  ${props.fuel_2} as propellants. The version now we are using is the  ${props.version} the latest one. ${props.name} has a total weight of  ${props.weight} kgs and the height was  ${props.height} feet.And the ovearll cost is  ${props.cost} dollars
        
        ${props.name} can lift payloads of up to ${props.payload_1_weight} kilograms to ${props.payload_1_name} , ${props.payload_2_weight} kg  to ${props.payload_2_name} when expended. The latter was launched into a lower-energy  ${props.payload_2_name} achieving an apogee well below the geostationary altitude, while the former was launched into an advantageous super-synchronous transfer orbit. In late 2021, a  ${props.name} was used to launch the IXPE probe into equatorial orbit from KSC with a post-launch orbital plane change maneuver.
        
        As of January 2021,  ${props.name} has the most launches among all U.S. rockets currently in operation and is the only U.S. rocket fully certified for transporting humans to the International Space Station, and the only commercial rocket to launch humans to orbit. On 24 January 2021, Falcon 9 set a record for the most satellites launched by a single rocket carrying  ${props.success_rate}satellites into orbit.

        To know more about  ${props.name} click here ${props.link}.

        `}
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default RocketInfo;
