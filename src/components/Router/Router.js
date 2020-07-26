import React from "react";
import { Switch, Route } from "react-router-dom";
import Heroes from "../Heroes/Heroes";
import ComicDetails from "../ComicDetails/ComicDetails";

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Heroes} />
        <Route path="/comic/:id" component={ComicDetails} />
      </Switch>
    </div>
  );
}

export default Router;
