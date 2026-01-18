import React from 'react';
import './body.css'; 
import hostelImg1 from '../../assets/mainpageimages/doing-removebg-preview.png';
// Import your second image here
import hostelImg2 from '../../assets/mainpageimages/dinner.png'; 

const Body = () => {
  return (
    <div className="body-wrapper">
      {/* Section 1: First Hostel Info */}
      <section className="body-section">
        <div className="body-container">
          <div className="body-image-box">
            <img src={hostelImg1} alt="Hostel 1" className="body-img" />
          </div>
          <div className="body-text-box">
            <h2 className="body-title">Sant. Muktabai Girls<br/><span>Hostel</span></h2>
            <p className="body-description">
              Dedicated to providing secure and subsidized accommodation for deserving students. 
              Our mission is to ensure that financial barriers never stand in the way of your education.
            </p>
            <div className="body-actions">
              <button className="btn-main">Get Started</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Second Hostel Info (Bottom) */}
      <section className="body-section">
        <div className="body-container">
          <div className="body-image-box">
            <img src={hostelImg2} alt="Hostel 2" className="body-img" />
          </div>
          <div className="body-text-box">
            <h2 className="body-title">BCEBC <br/><span>Girls Hostel</span></h2>
            <p className="body-description">
              Committed to student success through subsidized living. We provide high-speed 
              digital connectivity, 24/7 campus security, and a disciplined environment 
              aligned with government welfare standards for a productive academic journey.
            </p>
            <div className="body-actions">
              <button className="btn-main">Get started</button>
              <button className="btn-outline">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;