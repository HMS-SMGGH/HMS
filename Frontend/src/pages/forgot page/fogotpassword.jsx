
// import { Link } from "react-router-dom"; 

/* <Link to="/studentLogin" className="back-login">
Back to Login</Link> */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./forgotPassword.css";
import { FiSun, FiMoon } from "react-icons/fi";

function ForgotPassword() {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme from localStorage (if any)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // ✅ Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="forgot-page">
      {/* 🌞 / 🌙 Toggle Button */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? (
          <FiMoon size={26} title="Switch to Dark Mode" />
        ) : (
          <FiSun size={26} title="Switch to Light Mode" />
        )}
      </div>

      {/* Forgot Password Container */}
      <div className="forgot-container">
        <div className="icon">⚡</div>
        <h2>Forgot Password?</h2>

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <button>Send OTP</button>

      <Link to="/studentLogin" className="back-login">
Back to Login</Link> 
      </div>
    </div>
  );
}

export default ForgotPassword;
