import './styles/main.scss';
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
    </div>
  );
}

export default App;
