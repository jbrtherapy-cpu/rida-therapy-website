import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="container header-content">
        <a href="#hero" className="logo">Rida Therapy</a>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Open menu">
          ☰
        </button>

        <nav className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About Me</a>
          <a href="#advice-hub" onClick={toggleMenu}>Advice Hub</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
