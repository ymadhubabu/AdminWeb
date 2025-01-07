// src/components/LogoutPage.tsx
import React, { useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    // Clear user context
    setUser(null);
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/');
  }, [setUser]);

  return (
    <div>
      <h1>Logging Out...</h1>
    </div>
  );
};

export default LogoutPage;
