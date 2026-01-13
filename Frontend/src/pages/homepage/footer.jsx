import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hostel Management System</h3>
          <p>The ultimate hostel management platform.</p>
          <p>Powered by Samaj Kalyan Office.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: santmuktahstl.com</p>
          <p>Phone: +91 9100022224</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 HMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;