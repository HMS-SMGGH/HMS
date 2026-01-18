import React from 'react';
import './landingpage.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import backgroundImage from "../../assets/background.jpg";

const LandingPage = () => {
  return (
    <>
      <main className="landing-container">
        {/* Static Background Image */}
        <div 
          className="bg-static" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})` }}
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

        {/* REPLACEMENT: 
           Instead of the old static hero-overlay, 
           we now use the Body component you created.
        */}
        <div className="content-wrapper">
           <Body />
        </div>

      </main>

      <Footer />
    </>
  );
};

export default LandingPage;


