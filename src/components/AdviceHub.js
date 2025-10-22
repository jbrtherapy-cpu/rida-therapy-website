import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function AdviceHub() {
  return (
    <section id="advice-hub" className="advice-hub">
      <div className="container">
        <h2>Explore the Advice Hub</h2>
        <p>
          Sometimes, the first step is simply learning more. I've created a library of free, practical guides to help you understand your feelings and discover tools for a healthier mind. Explore resources on anxiety, stress, relationships, and guidance rooted in Islamic psychology.
        </p>
        {/* This now links to your new page */}
        <Link to="/advice-hub" className="cta-button">Visit the Advice Hub</Link>
      </div>
    </section>
  );
}

export default AdviceHub;
