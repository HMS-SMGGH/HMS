import React from 'react';
import './landingpage.css';
import Header from './header';
import Footer from './footer';
import backgroundImage from "../../assets/background.jpg";

const LandingPage = () => {
  return (
    <>
      <main className="landing-container">
        {/* Static Background Image */}
        <div 
          className="bg-static" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})` }}
        ></div>

        {/* Animated Bubbles Layer */}
        <div className="bubbles-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        <Header />

        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Modern Living <br /><span>Simplified</span></h1>
            <p>The ultimate hostel management platform for students and staff.</p>
            
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;


