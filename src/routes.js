import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard/:name" exact component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
