import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./constants/routesURL";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DashBoard from "./routes/dashboard/index";
import LeaveSummary from "./component/leaveSummary";

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
              <Route
                path={routes.index}
                render={() => <Redirect to={routes.dashboard} />}
                exact={true}
              />
              <Route path={routes.dashboard} component={DashBoard} />
              <Route path={routes.leavesummary} component={LeaveSummary} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
