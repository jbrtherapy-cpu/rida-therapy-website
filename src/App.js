import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import About from './components/About';
import AdviceHub from './components/AdviceHub';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <About />
        <AdviceHub />
        <Contact />
      </main>
    </div>
  );
}

export default App;
