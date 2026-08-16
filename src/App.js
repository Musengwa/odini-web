// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Traction from './components/Traction';
import Download from './components/Download';
import Join from './components/Join';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Traction />
      <Download />
      <Join />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
