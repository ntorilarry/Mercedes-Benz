import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero";
import Second from "./components/second";
import Sporty from "./components/sporty";
import Masterpiece from "./components/masterpiece";

function App() {
  return (
    <div className="App">
      <Hero />
      <Second />
      <Sporty/>
      <Masterpiece/>
    </div>
  );
}

export default App;
