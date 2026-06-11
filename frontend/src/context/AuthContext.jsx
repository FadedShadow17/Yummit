import { createContext, useEffect, useState } from 'react';
import api from '../api/axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem('yummit_token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await api.get('/auth/me');
        setUser(response.data.user);
      } catch (error) {
        localStorage.removeItem('yummit_token');
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (credentials) => {
    setAuthError(null);
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('yummit_token', response.data.token);
    setUser(response.data.user);
    return response.data;
  };

  const register = async (payload) => {
    setAuthError(null);
    const response = await api.post('/auth/register', payload);
    localStorage.setItem('yummit_token', response.data.token);
    setUser(response.data.user);
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('yummit_token');
    setUser(null);
  };

  const updateProfile = async (profileData) => {
    const response = await api.put('/users/profile', profileData);
    setUser(response.data.user);
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ user, loading, authError, login, register, logout, updateProfile, setAuthError }}>
      {children}
    </AuthContext.Provider>
  );
};
