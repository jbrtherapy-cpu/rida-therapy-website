import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AdviceHubPage from './pages/AdviceHubPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/advice-hub" element={<AdviceHubPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
