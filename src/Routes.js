import React from "react"
import { Route, Switch } from "react-router-dom";

import Home from './views/Home'
import Dashboard from './views/Dashboard/Dashboard'
import ControlPanel from './views/ControlPanel'




export default function () {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/control" component={ControlPanel} />
      <Route path="/" component={Home} exact />
      <Route render={() => <h3> Nie ma takiej strony</h3>} />
    </Switch>
  )
}


