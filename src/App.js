import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import HomeContainer from "./containers/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div>
      {/* <User data={{name: 'Tanmay paul', age: 27}} /> */}
      <Navbar />
      <Home />
      <HomeContainer />
    </div>
  );
};

export default App;
