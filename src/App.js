import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/dashboard/index";

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <SideBar /> */}
      <DashBoard />
    </div>
  );
}

export default App;
