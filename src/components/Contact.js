import React from 'react';
import '../ContactForm.css'; // We will create this new CSS file

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Take the First Step</h2>
        <p>
          Reaching out is not a sign of weakness; it's a sign of strength.
          <br />
          Send me a confidential message below to book your free 15-minute consultation.
        </p>

        <form 
          action="https://formspree.io/f/xwprgznj" 
          method="POST" 
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="cta-button form-button">Send Message</button>
        </form>
        <p className="contact-note">I will respond to all inquiries within 1-2 business days.</p>
      </div>
    </section>
  );
}

export default Contact;