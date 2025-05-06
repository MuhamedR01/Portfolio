import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import AboutMe from './assets/components/AboutMe';
import Services from './assets/components/Services';
import Skills from './assets/components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="about"><AboutMe /></div>
      <div id="services"><Services /></div>
      <div id="skills"><Skills /></div>
    </div>
  );
}

export default App;