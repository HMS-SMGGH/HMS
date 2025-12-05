import React from "react";
import { Link } from "react-router-dom"
import "./homepage.css";
import logo from "../../assets/logo.png";

const Homepage = () => {
  return (
    <div className="hms-homepage">
      {/* 🌐 HEADER / NAVBAR */}
      <header className="header">
      <div className="header-left">
        <img src={logo} alt="hms Logo" className="header-logo" />
        
      </div>
      <div className="header-right">
        <Link to="/signup">
          <button className="header-btn">Register</button>
        </Link>
        <Link to="/login">
          <button className="header-btn">Log In</button>
        </Link>
      </div>
    </header>

      {/* 🏡 HERO SECTION */}
      <main className="hero">
        <div className="hero-card">
          <h1>Welcome to HMS</h1>
          <p className="lead">
            Simplify hostel management — from admissions and rooms to payments and notices.
          </p>

          <div className="hero-actions">
            <Link to="/studentLogin" className="btn btn-primary">Student Login</Link>
            {/* <Link to="/signup" className="btn btn-outline">Create Account</Link> */}
          </div>
        </div>

        {/* ⚙ FEATURES SECTION */}
        <div className="features">
          <div className="feature">
            <h3>Room Management</h3>
            <p>Allocate, view and update room assignments with ease.</p>
          </div>

          <div className="feature">
            <h3>Fee Tracking</h3>
            <p>Track payments, generate receipts and view due reports.</p>
          </div>

          <div className="feature">
            <h3>Notices & Events</h3>
            <p>Post announcements and keep students informed.</p>
          </div>

          <div className="feature">
            <h3>Profiles & Reports</h3>
            <p>Maintain student profiles and export management reports.</p>
          </div>
        </div>
      </main>

      {/* 🦶 FOOTER */}
      <footer className="hms-footer">
        <div className="footer-content">
          <div className="footer-about">
            <h4>About HMS</h4>
            <p>
              HMS is a complete hostel management solution that helps administrators and students manage everything from one place.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/student-login">Login</a>
            <a href="/register">Register</a>
            <a href="/support">Support</a>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📍 Girls Hostel Campus, India</p>
            <p>📧 info@hms.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} HMS — All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;