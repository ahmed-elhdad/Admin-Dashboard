import "./App.css";
import Dashboard from "./components/Dashboard";
import Fluid from "./components/Fluid";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./css/helpers/bootstrap.min.css";
import "./css/helpers/style.css";
import "./css/main/Main.css";
function App() {
  return (
    <>
      <div className="top-container">
        <Header />
        <div className="container d-flex flex-column justify-content-center align-items-center position-relative top-50">
          <Nav />
          <Fluid />
        </div>
      </div>
    </>
  );
}

export default App;
