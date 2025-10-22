import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AdviceHubPage from './pages/AdviceHubPage';
import ArticlePage from './pages/ArticlePage'; // 1. IMPORT THE NEW PAGE

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/advice-hub" element={<AdviceHubPage />} />
          {/* 2. ADD THIS NEW DYNAMIC ROUTE */}
          <Route path="/advice-hub/:slug" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;