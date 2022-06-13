import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero";
import Second from "./components/second";
import Sporty from "./components/sporty";
import Masterpiece from "./components/masterpiece";
import Contact from "./components/contact";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Second />
      <Sporty/>
      <Masterpiece/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
