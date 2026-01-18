import React from 'react';
import './landingpage.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import backgroundImage from "../../assets/background.jpg";

const LandingPage = () => {
  return (
    <div className="main-wrapper">
      
      {/* LAYER 1: Fixed Background Image */}
      <div 
        className="bg-fixed" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-overlay"></div> {/* Optional dark tint */}
      </div>

      {/* LAYER 2: Floating Bubbles */}
      <div className="bubbles-container">
        {/* Generating 10 bubbles for the effect */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* LAYER 3: The Content (Scrollable) */}
      <div className="content-scrollable">
        <Header />
        
        {/* Your Body component contains the hostel info */}
        <Body />

        <Footer />
      </div>

    </div>
  );
};

export default LandingPage;