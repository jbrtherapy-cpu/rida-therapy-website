import React from 'react';

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>How I Can Help</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Anxiety & Stress Management</h3>
            <p>For the professional feeling pulled in a million directions. We'll work together to move you from being constantly reactive to feeling proactive and in control. Learn practical tools to navigate pressure with serenity and find a healthier work-life balance.</p>
          </div>
          <div className="service-card">
            <h3>Individual Counselling for Cultural Identity</h3>
            <p>For the individual navigating the delicate balance of two worlds. If you're struggling with the weight of family expectations, feeling invalidated, or processing generational trauma, this is a safe space to find your own voice, build your self-worth, and set boundaries without guilt.</p>
          </div>
          <div className="service-card">
            <h3>Relationship & Family Counselling</h3>
            <p>For the couple facing cultural and family conflicts. We can address the challenges of over-involved in-laws and differing cultural values. Learn to communicate better, support each other, and work as a team to build a relationship that honours both your partnership and your families.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
