import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// NEW CHANGE: Import the external CSS file
import './studentlogin.css'; 

// --- START: Dark/Light Mode Icon Components (SVG) ---

// Sun Icon (Displayed when in Dark Mode, prompts switch to Light)
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

// Moon Icon (Displayed when in Light Mode, prompts switch to Dark)
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// --- END: Dark/Light Mode Icon Components ---

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Theme Logic: State to track the current theme mode. Defaulting to false (light mode).
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme Logic: useEffect to apply/remove the 'dark-mode' class to the body element.
  // This class triggers the dark mode styles defined in the external CSS.
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]); 

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Attempting to log in with: ${username}`);
  };

  // Theme Logic: Handler function to flip the theme state when the icon is clicked.
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      {/* The embedded <style> block is now REMOVED as the CSS is external */}
      
      <div className="login-wrapper"> 
        
        {/* Theme Toggle Button with click handler */}
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode} 
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {/* Conditional rendering based on current mode */}
          {isDarkMode ? <SunIcon /> : <MoonIcon />} 
        </button>

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
              <Link to="/signup" className="link-pink">Need Account? Sign Up</Link>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;