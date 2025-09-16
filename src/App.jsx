import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Intro />
      <Body />
      <Contact />
    </div>
  );
}

export default App;
