import React from "react";
import { Route, Switch } from "react-router-dom";
import TweetSimulator from "./components/tweet-simulator/TweetSimulator";
import CineSimulator from "./components/cine-simulator/CineSimulator";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TweetSimulator} />
        <Route exact path="/cine-simulator" component={CineSimulator} />
      </Switch>
    </div>
  );
}

export default Routes;
