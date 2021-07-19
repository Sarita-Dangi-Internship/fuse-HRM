import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./constants/routes";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/dashboard/index";

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
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
