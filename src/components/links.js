// src/routes/routes.js

import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import GuestGuard from './GuestGuard';
import AuthGuard from './AuthGuard';

const routes = [
  
  {
    path: '/',
    component: <LoginForm/>,
    exact: true
  },
  {
    path: '/register',
    component: <RegistrationForm/>,
    exact: true
  },
  {
    path: '/dashboard',
    component: <Dashboard/>,
    exact: true
  }, 
  {
    path: '/login',
    element: <GuestGuard element={LoginForm} />,
    exact: true,
  },
  {
    path: '/dashboard',
    element: <AuthGuard element={Dashboard} />,
    exact: true,
  },
];

export default routes;
