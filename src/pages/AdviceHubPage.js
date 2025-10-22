import React from 'react';
import { Link } from 'react-router-dom';
import '../AdviceHubPage.css';
import articleData from '../articleData'; // 1. IMPORT YOUR ARTICLE DATA

function AdviceHubPage() {
  return (
    <div className="advice-hub-page">
      <div className="container">
        <div className="hub-header">
          <h1>The Rida Therapy Advice Hub</h1>
          <p>A collection of resources designed to support your mental and spiritual wellbeing. Please select a topic to learn more.</p>
        </div>
        <div className="hub-grid">
          
          {/* 2. DYNAMICALLY CREATE CARDS FROM YOUR DATA */}
          {articleData.map((article) => (
            <Link to={`/advice-hub/${article.slug}`} key={article.slug} className="article-card-link">
              <div className="article-card">
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <span>Read More ▸</span>
              </div>
            </Link>
          ))}

        </div>
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default AdviceHubPage;