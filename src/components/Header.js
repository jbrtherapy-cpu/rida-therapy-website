import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <div className="container header-content">
        <a href="#hero" className="logo">Rida Therapy</a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About Me</a>
          <a href="#advice-hub">Advice Hub</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
