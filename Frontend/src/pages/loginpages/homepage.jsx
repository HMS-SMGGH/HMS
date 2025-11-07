import React from "react";
import "./homepage.css";

/**
 * If you use react-router-dom, replace <a> with <Link to="..."> and import Link.
 */

const Homepage = () => {
  return (
    <div className="hms-homepage">
      <header className="hms-header">
        <div className="hms-brand">HMS — Hostel Management System</div>
        <nav className="hms-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/student-login" className="nav-link">Student Login</a>
          <a href="/register" className="nav-link">Register</a>
          <a href="/admin" className="nav-link admin">Admin</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-card">
          <h1>Welcome to HMS</h1>
          <p className="lead">
            Simplify hostel management — from admissions and rooms to payments and notices.
          </p>

          <div className="hero-actions">
            <a href="/student-login" className="btn btn-primary">Student Login</a>
            <a href="/register" className="btn btn-outline">Create Account</a>
          </div>
        </div>

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

      <footer className="hms-footer">
        <div>© {new Date().getFullYear()} HMS — All rights reserved.</div>
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
