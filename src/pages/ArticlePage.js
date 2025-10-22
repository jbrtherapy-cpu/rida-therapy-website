import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articleData from '../articleData';
import '../ArticlePage.css'; // We will create this CSS file next

function ArticlePage() {
  // Get the 'slug' from the URL (e.g., "managing-anxiety")
  const { slug } = useParams();
  
  // Find the correct article from our data file
  const article = articleData.find((article) => article.slug === slug);

  // If no article is found, show a message
  if (!article) {
    return (
      <div className="article-page container">
        <h1>Article Not Found</h1>
        <p>Sorry, we couldn't find the article you were looking for.</p>
        <Link to="/advice-hub" className="back-link">← Back to Advice Hub</Link>
      </div>
    );
  }

  // If the article is found, display it
  return (
    <div className="article-page">
      <div className="container">
        <div className="article-content">
          <h1>{article.title}</h1>
          {article.content}
        </div>
        <div className="back-link-container">
          <Link to="/advice-hub" className="back-link">← Back to Advice Hub</Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;