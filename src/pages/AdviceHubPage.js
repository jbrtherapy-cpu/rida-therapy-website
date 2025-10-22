import React from 'react';
import { Link } from 'react-router-dom'; // Used for the "Back to Home" link
import '../AdviceHubPage.css'; // We will create this new CSS file

function AdviceHubPage() {
  return (
    <div className="advice-hub-page">
      <div className="container">
        <div className="hub-header">
          <h1>The Rida Therapy Advice Hub</h1>
          <p>A collection of resources designed to support your mental and spiritual wellbeing. Please select a topic to learn more.</p>
        </div>
        <div className="hub-grid">
          <div className="article-card">
            <h3>A Practical Guide to Managing Anxiety</h3>
            <p>Learn to understand the triggers of anxiety and discover practical tools to calm your mind.</p>
            <span>Read More ▸</span>
          </div>
          <div className="article-card">
            <h3>5 Tools for Navigating Stressful Times</h3>
            <p>Actionable techniques to manage stress, avoid burnout, and build resilience in your daily life.</p>
            <span>Read More ▸</span>
          </div>
          <div className="article-card">
            <h3>Foundations of a Stronger Relationship</h3>
            <p>Explore key communication and connection strategies to help you and your partner feel like a team again.</p>
            <span>Read More ▸</span>
          </div>
          <div className="article-card">
            <h3>An Islamic Perspective on Wellbeing</h3>
            <p>Guidance rooted in Islamic psychology to help you find peace, purpose, and contentment.</p>
            <span>Read More ▸</span>
          </div>
        </div>
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default AdviceHubPage;