import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LaunchInfo from "../components/LaunchInfo";
import classes from "./LaunchDetail.module.css";
import NotFound from "./NotFound";

const LaunchDetail = () => {
  const [launchDetailData, setLaunchDetailData] = useState([]);

  useEffect(() => {
    const fetchLaunchDetails = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launchpads");
      const responseData = await response.json();
      const transformedData = [];
      for (const key in responseData) {
        transformedData.push({
          id: key,
          title: responseData[key].vehicles_launched,
          location: responseData[key].location.name,
          country: responseData[key].location.region,
          attempt: responseData[key].attempted_launches,
          success: responseData[key].successful_launches,
          details: responseData[key].details,
          site_name: responseData[key].site_name_long,
          link: responseData[key].wikipedia,
        });
      }

      console.log(transformedData);
      setLaunchDetailData(transformedData);
    };
    fetchLaunchDetails();
  }, []);

  const params = useParams();
  console.log(launchDetailData);
  console.log(launchDetailData.id === params.productId);

  const launch = launchDetailData.find(
    (launch) => launch.id === params.productId
  );
  console.log(launch);
  if (!launch) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <section className={classes.main}>
        <div className={classes.overlay}></div>
        <LaunchInfo
          title={launch.title}
          location={launch.location}
          country={launch.country}
          attempt={launch.attempt}
          success={launch.success}
          details={launch.details}
          site_name={launch.site_name}
          link={launch.link}
        ></LaunchInfo>
      </section>
    </Fragment>
  );
};

export default LaunchDetail;
