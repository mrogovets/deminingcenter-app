import React from "react";
import "./App.css";
import "./materialize.css";
import { NavPanel } from "./components/nav-panel/NavPanel";
import { Slider } from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <NavPanel />
      <Slider />
    </div>
  );
}

export default App;
