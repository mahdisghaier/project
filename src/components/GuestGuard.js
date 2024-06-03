import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const GuestGuard = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/dashboard" />
        )
      }
    />
  );
};

export default GuestGuard;