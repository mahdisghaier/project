// src/components/Sidebar.js
import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
