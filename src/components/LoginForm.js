// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = { email, password };

    axios.post('http://localhost:5000/login', userData)
      .then(response => {
        setLoading(false);
        if (response.data.message === "login success") {
          localStorage.setItem('token', response.data.token); // Store token
          toast.success("Login successful!");
          navigate('/dashboard');
        }
      })
      .catch(error => {
        setLoading(false);
        if (error.response && error.response.status === 401) {
          toast.error('Invalid email or password.');
        } else {
          toast.error('There was an error logging in. Please try again later.');
        }
      });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
