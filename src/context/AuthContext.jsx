import React, { createContext, useState, useContext, useEffect } from 'react';
import { adminAPI } from '../api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem('adminToken');
      const adminInfo = localStorage.getItem('adminInfo');

      if (!token || !adminInfo || token === 'undefined' || token === 'null') {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminInfo');
        return;
      }

      const parsedAdmin = JSON.parse(adminInfo);
      if (!parsedAdmin || typeof parsedAdmin !== 'object' || Array.isArray(parsedAdmin)) {
        throw new Error('Saved admin profile is invalid');
      }

      setAdmin(parsedAdmin);
    } catch (error) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminInfo');
      setAdmin(null);
      console.warn('Cleared invalid saved admin session.');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await adminAPI.login({ email, password });
      const { token, admin } = response.data || {};

      if (typeof token !== 'string' || !token.trim() || !admin || typeof admin !== 'object') {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminInfo');
        return { success: false, error: 'Login response is missing admin session details.' };
      }
      
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminInfo', JSON.stringify(admin));
      setAdmin(admin);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Login failed' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    setAdmin(null);
  };

  const value = {
    admin,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
