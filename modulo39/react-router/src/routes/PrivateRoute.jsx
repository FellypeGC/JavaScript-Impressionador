import React from 'react'
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
  // Login simulation
  const isAuthenticated = localStorage.getItem("isAdmin") === "true";

  return isAuthenticated ? children : <Navigate to="/login/" />
}
