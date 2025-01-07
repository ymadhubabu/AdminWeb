// src/contexts/UserContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User } from '../types/User';
import axios from 'axios';
import { API_BASE_URL, API_VERSION } from '../constants';

interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Get user data from localStorage 
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Save user data to localStorage whenever it changes 
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  })


  // useEffect(() => { 
  //   const fetchUser = async () => { 
  //     try { 
  //       const response = await axios.get(API_BASE_URL + API_VERSION + 'auth/profile'); 
  //       setUser(response.data); 
  //     } catch (error) { 
  //       console.error('Error fetching user data:', error); 
  //     } 
  //   }; 
  //   fetchUser(); 
  // }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
