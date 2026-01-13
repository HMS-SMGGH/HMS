import React from 'react';
import './header.css';
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Hostel Logo" className="nav-logo" />
        <span className="brand-name">HM<span>S</span></span>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </nav>
      <div className="nav-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Signup</button>
      </div>
    </header>
  );
};

export default Header;


