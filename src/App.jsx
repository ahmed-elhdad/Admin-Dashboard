import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./css/bootstrap.min.css";
import "./css/style.css";
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
