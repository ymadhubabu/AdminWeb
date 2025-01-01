import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserContextType = {
  userName: string;
  role: string;
  setUser: (user: { userName: string; role: string }) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ userName: string; role: string }>({ userName: '', role: '' });

  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
