import React from 'react';
import OTPLogin from './pages/login/OTPLogin';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/Home/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<OTPLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    
  );
};

export default App;

