import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; // 1. IMPORT FOOTER
import './Footer.css'; // 2. IMPORT FOOTER CSS

import HomePage from './pages/HomePage';
import AdviceHubPage from './pages/AdviceHubPage';
import ArticlePage from './pages/ArticlePage';
import './ContactForm.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/advice-hub" element={<AdviceHubPage />} />
          <Route path="/advice-hub/:slug" element={<ArticlePage />} />
        </Routes>
        <Footer /> {/* 3. ADD FOOTER HERE */}
      </div>
    </Router>
  );
}

export default App;