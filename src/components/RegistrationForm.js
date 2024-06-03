// src/components/RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [groupKey, setGroupKey] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');

    const userData = {
      email,
      groupKey,
      password,
      accountType: 1,
      details: { someDetailKey: 'someDetailValue' }
    };

    axios.post('/addUser', userData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="groupKey">Group Key:</label>
        <input
          type="text"
          id="groupKey"
          value={groupKey}
          onChange={(e) => setGroupKey(e.target.value)}
          required
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default RegistrationForm;
