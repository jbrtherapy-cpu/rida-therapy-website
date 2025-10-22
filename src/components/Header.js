import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine if we are on the homepage to handle anchor links
  const isHomePage = location.pathname === '/';

  return (
    <header className="app-header">
      <div className="container header-content">
        <Link to="/" className="logo">Rida Therapy</Link>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Open menu">
          ☰
        </button>

        <nav className={isMenuOpen ? "nav-links open" : "nav-links"}>
          {isHomePage ? <a href="#services" onClick={toggleMenu}>Services</a> : <Link to="/#services" onClick={toggleMenu}>Services</Link>}
          {isHomePage ? <a href="#about" onClick={toggleMenu}>About Me</a> : <Link to="/#about" onClick={toggleMenu}>About Me</Link>}
          <Link to="/advice-hub" onClick={toggleMenu}>Advice Hub</Link>
          {isHomePage ? <a href="#contact" onClick={toggleMenu}>Contact</a> : <Link to="/#contact" onClick={toggleMenu}>Contact</Link>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
