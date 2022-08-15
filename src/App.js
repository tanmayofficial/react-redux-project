import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      {/* <User data={{name: 'Tanmay paul', age: 27}} /> */}
      <Navbar />
      <HomeContainer />
    </div>
  );
};

export default App;
