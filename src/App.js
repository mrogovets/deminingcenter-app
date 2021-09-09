import React from "react";
import "./App.css";
import "./materialize.css";
import { NavPanel } from "./components/nav-panel/NavPanel";
import { Slider } from "./components/slider/Slider";
import { Footer } from "./components/footer/footer";
import { Cards } from "./components/cards/cards";

function App() {
  return (
    <div className="App">
      <NavPanel />
      <Slider />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
