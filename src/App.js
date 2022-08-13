import "./App.css";
import HomeContainer from "./containers/HomeContainer";
// import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      {/* <User data={{name: 'Tanmay paul', age: 27}} /> */}
      <Navbar />
      <HomeContainer />
    </div>
  );
}

export default App;
