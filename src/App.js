// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Join from './components/Join';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Join />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;