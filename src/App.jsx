import React from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import AboutMe from './assets/components/AboutMe';
import Services from './assets/components/Services';
import Skills from './assets/components/Skills';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="about"><AboutMe /></div>
      <div id="services"><Services /></div>
      <div id="skills"><Skills /></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;