import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css'; // We will create this new CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column">
          <h3>Rida Therapy</h3>
          <p>Finding your path to contentment and acceptance.</p>
          <p>&copy; {new Date().getFullYear()} Rida Therapy. All rights reserved.</p>
        </div>
        <div className="footer-column">
          <h3>Contact Me</h3>
          <p>
            {/* --- UPDATE THESE DETAILS --- */}
            <strong>Phone:</strong> <a href="tel:+447823663208">+44 0782 366 3208</a>
            <br />
            <strong>Email:</strong> <a href="mailto:jbrtherapy@gmail.com">jbrtherapy@gmail.com</a>
          </p>
          <p>
            Offices in Oldham & Manchester
            <br />
            Serving clients worldwide
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#about">About Me</Link></li>
            <li><Link to="/advice-hub">Advice Hub</Link></li>
            <li><Link to="/#contact">Book Now</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;