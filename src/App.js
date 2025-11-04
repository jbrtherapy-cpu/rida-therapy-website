import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global CSS
import './App.css';
import './Footer.css';
import './ContactForm.css'; // Or your Calendly CSS
import './AdviceHubPage.css';
import './ArticlePage.css';
import './ServicePage.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 1. IMPORT THE NEW COMPONENT

// Pages
import HomePage from './pages/HomePage';
import AdviceHubPage from './pages/AdviceHubPage';
import ArticlePage from './pages/ArticlePage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> {/* 2. ADD THE COMPONENT HERE */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/advice-hub" element={<AdviceHubPage />} />
          <Route path="/advice-hub/:slug" element={<ArticlePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;