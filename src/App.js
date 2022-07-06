import "./App.css";
import HomePage from "./components/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import Rockets from "./Pages/Rockets";
import Launches from "./Pages/Launches";
import LaunchDetail from "./Pages/LaunchDetail";
import RocketDetails from "./Pages/RocketDetails";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/rockets" exact>
          <Rockets />
        </Route>
        <Route path="/launches" exact>
          <Launches />
        </Route>
        <Route path="/rockets/:productId">
          <RocketDetails />
        </Route>
        <Route path="/launches/:productId">
          <LaunchDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
