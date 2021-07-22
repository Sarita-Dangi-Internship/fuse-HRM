import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserAuthenticated } from "../helpers/authUtils";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
