import React from "react";
import { Route } from "react-router-dom";

const RouteWithSubRoutes = (routeProps) => (
  <Route
    path={routeProps.path}
    render={(props) => (
      <routeProps.component
        {...props}
        {...routeProps}
        routes={routeProps.routes}
      />
    )}
  />
);

export default RouteWithSubRoutes;
