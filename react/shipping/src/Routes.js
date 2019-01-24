import React from "react";
import { Route, Switch } from "react-router-dom";
import ShippingLabelMaker from "./features/shipping-label-maker/shipping-label-maker";
import Login from "./features/login/login";

export default () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/wizard" exact component={ShippingLabelMaker} />
  </Switch>
);
