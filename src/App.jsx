import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import AboutMe from './assets/components/AboutMe';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;