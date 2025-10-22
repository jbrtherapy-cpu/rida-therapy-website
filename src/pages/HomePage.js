import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import About from '../components/About';
import AdviceHub from '../components/AdviceHub';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Philosophy />
      <About />
      <AdviceHub />
      <Contact />
    </main>
  );
}

export default HomePage;