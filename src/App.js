import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./constants/routes";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/dashboard/index";
import LeaveRequest from './pages/dashboard/leaveRequest/leaveRequest';
import LeaveRequestDashboard from './pages/dashboard/leaveRequest/leaveRequestDashboard';
import DeleteView from "./components/DeleteView";
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
              <Route path={routes.leaverequest} component={LeaveRequestDashboard} />
              <Route path={routes.leaverequestone} component={LeaveRequest} />
              <Route path={routes.deleteView} component={DeleteView} />
            </Switch>
            
          </div>
        </div>
      </div>
    </BrowserRouter>
  




  );
}

export default App;
