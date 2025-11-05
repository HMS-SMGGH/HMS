// src/pages/loginpages/studentlogin.jsx

import React, { useState } from 'react';
import './studentlogin.css'; // <-- THE FIX: Import the .css file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    alert(`Attempting to log in with: ${username}`);
  };

  return (
    <div className="login-wrapper"> 
      <div className="login-container">
        
        <div className="login-header">
          <h1>Hostel Login</h1>
          <p>Access your Management Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          
          {/* Input with Icon */}
          <div className="input-group">
            {/* User Icon (using an inline SVG) */}
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </span>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required 
            />
          </div>
          
          {/* Input with Icon */}
          <div className="input-group">
            {/* Lock Icon (using an inline SVG) */}
            <span className="input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </span>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required 
            />
          </div>
          
          <button type="submit" className="login-button">Log In</button>

          <div className="login-footer">
            <a href="#" className="link-blue">Forgot Password?</a>
            <span className="divider">|</span>
            <a href="#" className="link-pink">Need Account? Sign Up</a>
          </div>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;