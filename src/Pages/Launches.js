import classes from "./Launches.module.css";
import LaunchList from "../components/LaunchList";
import { useState, useEffect } from "react";

const Launches = () => {
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    const fetchLaunchData = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launchpads");
      const responseData = await response.json();
      const transformedData = [];
      for (const key in responseData) {
        transformedData.push({
          id: key,
          title: responseData[key].vehicles_launched,
          location: responseData[key].location.name,
          country: responseData[key].location.region,
        });
      }

      setLaunchData(transformedData);
    };
    fetchLaunchData();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <LaunchList launches={launchData} />
      </div>
    </div>
  );
};

export default Launches;
