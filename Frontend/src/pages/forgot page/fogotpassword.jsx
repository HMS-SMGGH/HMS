import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.css";

// --- START: SVG Icons with Dynamic Color Prop ---

// 1. Sun Icon (For Dark Mode -> needs to be White)
const SunIcon = ({ color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} // 👈 Using the prop here directly
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
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

// 2. Moon Icon (For Light Mode -> needs to be Black)
const MoonIcon = ({ color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} // 👈 Using the prop here directly
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// --- END: Icons ---

function ForgotPassword() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="forgot-page">
      {/* Theme Toggle Button */}
      <div 
        className="theme-toggle" 
        onClick={toggleTheme}
        title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        style={{ 
            cursor: "pointer", 
            zIndex: 1000, // Ensures it sits on top of background
            position: "absolute", // Ensures it stays in corner (adjust based on your CSS)
            top: "20px", 
            right: "20px"
        }}
      >
        {theme === "light" ? (
          // If Light Mode: Show Moon in Black/Dark Gray
          <MoonIcon color="#333333" />
        ) : (
          // If Dark Mode: Show Sun in White
          <SunIcon color="#ffffff" />
        )}
      </div>

      {/* Forgot Password Container */}
      <div className="forgot-container">
        <h1>Forgot Password?</h1>
<p style={{ marginBottom: "55px" }}>Reset Your Password</p>

        <label>Email Address</label>
        < input type="email" placeholder="Enter your email"  />

        <button>Send OTP</button>

        <Link to="/studentLogin" className="back-login">
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;