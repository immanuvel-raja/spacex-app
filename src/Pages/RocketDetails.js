import { useParams } from "react-router-dom";
import classes from "./RocketDetail.module.css";
import RocketInfo from "../components/RocketInfo";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const RocketDetails = () => {
  const [rockdDetailData, setRockDetailData] = useState([]);

  useEffect(() => {
    const fetchRocketDetails = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const responseData = await response.json();
      const transformedData = [];
      for (const key in responseData) {
        transformedData.push({
          id: key,
          name: responseData[key].rocket_name,
          detail: responseData[key].description,
          company: responseData[key].company,
          country: responseData[key].country,
          first_fly: responseData[key].first_flight,
          engine: responseData[key].engines.type,
          fuel_1: responseData[key].engines.propellant_1,
          fuel_2: responseData[key].engines.propellant_2,
          version: responseData[key].engines.version,
          payload_1_weight: responseData[key].payload_weights[0].kg,
          payload_1_name: responseData[key].payload_weights[0].name,
          payload_2_weight: responseData[key].payload_weights[0].lb,
          payload_2_name: responseData[key].payload_weights[0].id,
          stages: responseData[key].stages,
          cost: responseData[key].cost_per_launch,
          success_rate: responseData[key].success_rate_pct,
          height: responseData[key].height.meters,
          weight: responseData[key].mass.kg,
          link: responseData[key].wikipedia,
        });
      }
      console.log(transformedData);
      setRockDetailData(transformedData);
    };
    fetchRocketDetails();
  }, []);

  const params = useParams();
  console.log(rockdDetailData);
  console.log(rockdDetailData.id === params.productId);

  const rocket = rockdDetailData.find(
    (rocket) => rocket.id === params.productId
  );

  if (!rocket) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <section className={classes.main}>
        <div className={classes.overlay}></div>
        <RocketInfo
          detail={rocket.detail}
          country={rocket.country}
          first_fly={rocket.first_fly}
          name={rocket.name}
          company={rocket.company}
          engine={rocket.engine}
          fuel_1={rocket.fuel_1}
          fuel_2={rocket.fuel_2}
          version={rocket.version}
          payload_1_weight={rocket.payload_1_weight}
          payload_1_name={rocket.payload_1_name}
          payload_2_weight={rocket.payload_2_weight}
          payload_2_name={rocket.payload_2_name}
          cost={rocket.cost}
          stages={rocket.stages}
          success_rate={rocket.suucess_rate}
          height={rocket.height}
          weight={rocket.weight}
          link={rocket.link}
        ></RocketInfo>
      </section>
    </Fragment>
  );
};

export default RocketDetails;
