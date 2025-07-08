import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./css/helpers/bootstrap.min.css";
import "./css/helpers/style.css";
import "./css/main/Main.css";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Nav />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
