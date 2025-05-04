import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// Import other section components as needed
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Hero />
      {/* Add other sections here */}
      {/* <About />
      <Skills />
      <Portfolio /> */}
    </div>
  );
}

export default App;