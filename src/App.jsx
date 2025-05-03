import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Add more routes here as you create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;