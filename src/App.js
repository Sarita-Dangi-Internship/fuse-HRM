import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./constants/routesURL";
import LoginPage from "./components/LoginPage";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import LeaveDetails from './components/LeaveDetails'
import "./styles/main.scss";
import DashBoard from "./routes/dashboard/index";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <div className="aside">
            <SideBar />
          </div>
          <div className="wrapper__body">
            <NavBar />
            <Switch>
             //change it later to pvt route//
            <Route path={routes.login} component={LoginPage} /> 
              <Route
                path={routes.index}
                render={() => <Redirect to={routes.dashboard} />}
                exact={true}
              />
              <Route path={routes.dashboard} component={DashBoard}  />
              <Route path={routes.leavedetails} component={LeaveDetails} />
             
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
