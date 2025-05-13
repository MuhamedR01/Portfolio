import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import AboutMe from './assets/components/AboutMe';
import Services from './assets/components/Services';
import Skills from './assets/components/Skills';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import LoadingScreen from './assets/components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Hero />
          <div id="about"><AboutMe /></div>
          <div id="services"><Services /></div>
          <div id="skills"><Skills /></div>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;