import { Route, Switch } from "react-router-dom";
import React from "react";
import AdminHolidayList from "./HolidayList";
import { routes } from "../../constants/routesURL";

function Admin() {
  return (
    <Switch>
      <Route
        path={routes.admin.holidayList}
        component={AdminHolidayList}
        exact
      />
    </Switch>
  );
}

export default Admin;
