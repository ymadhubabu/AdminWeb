import React from 'react';
import OTPLogin from './pages/login/OTPLogin';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/Home/AboutPage';
import Dashboard from './pages/Home/Dashboard';
import Sidenav from './Sidenav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import LogoutPage from './pages/login/Logout';

const App: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <div style={{ display: 'flex' }}>
          <Sidenav />
          <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </div>
        </div>)
        : (<Routes><Route path="/" element={<OTPLogin />} /> </Routes>)}
    </>


  );
};

export default App;