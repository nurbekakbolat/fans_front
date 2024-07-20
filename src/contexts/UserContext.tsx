import React, { createContext, useState, ReactNode, FC } from 'react';
import { AuthService } from '../services/AuthService';

interface UserContextType {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const authService = AuthService.getInstance();

  const login = async (email: string, password: string) => {
    try {
      const data = await authService.login(email, password);
      localStorage.setItem('token', data.token);
      setUser({ email });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    authService.logout();
  };

  return (
    <UserContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
