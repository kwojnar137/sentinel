import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";

export default function () {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route render={() => <h3> Nie ma takiej strony</h3>} />
    </Switch>
  );
}
