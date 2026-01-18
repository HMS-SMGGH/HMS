import React from 'react';
import './header.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        {/* Clicking the logo usually takes you back home */}
        <Link to="/">
          <img src={logo} alt="Hostel Logo" className="nav-logo" />
        </Link>
        <span className="brand-name">HMS</span>
      </div>

      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </nav>

      <div className="nav-buttons">
        {/* We replace the <button> tags with <Link> tags */}
        <Link to="/studentLogin" className="btn-login">Login</Link>
        <Link to="/signup" className="btn-signup">Signup</Link>
      </div>
    </header>
  );
};

export default Header;


