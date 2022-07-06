// import MainHeader from "../components/MainHeader";
import classes from "./Rockets.module.css";
import RocketList from "../components/RocketList";
import { useEffect, useState } from "react";
// import RocketDetails from "./RocketDetails";
// import video from "../Assets/videos/galaxy.mp4";

const Rockets = () => {
  const [rockData, setRockData] = useState([]);

  useEffect(() => {
    const fetchRocketData = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const responseData = await response.json();
      const transformedData = [];
      for (const key in responseData) {
        transformedData.push({
          id: key,
          title: responseData[key].rocket_name,
          detail: responseData[key].description,
        });
      }
      console.log(transformedData);
      setRockData(transformedData);
    };
    fetchRocketData();
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.overlay}></div>

      <div className={classes.content}>
        <RocketList rockets={rockData} />
      </div>
    </div>
  );
};

export default Rockets;
