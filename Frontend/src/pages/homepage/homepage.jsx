import React from 'react';

// NOTE: You would typically import the CSS file at the top of your main App component or index file.
// import './App.css'; 

const HostelLayout = () => {
    return (
        <div className="app-container">
            
            {/* 1. Main Navigation Bar (Top) */}
            <header className="navbar-top">
                <div className="logo">
                    HostelHaven {/* Your Logo/Brand Name */}
                </div>
                <nav className="nav-links-top">
                    {/* These items correspond to the .nav-item CSS box styles */}
                    <a href="/home" className="nav-item">Home</a>
                    <a href="/about" className="nav-item">About Us</a>
                    <a href="/amenities" className="nav-item">Amenities</a>
                    <a href="/contact" className="nav-item">Contact</a>
                    {/* Example of a call to action button */}
                    <a href="/book" className="nav-item" style={{ borderColor: '#28a745', backgroundColor: '#28a745', color: 'white' }}>Book Now</a>
                </nav>
            </header>

            {/* 2. Main Layout (Sider and Content) */}
            <div className="layout-content">
                
                {/* 3. Sider Navigation Bar (Side) */}
                <aside className="sider-nav">
                    <h3 className="sider-title">Dashboard</h3>
                    <nav className="nav-links-sider">
                        <a href="/profile" className="sider-item">Profile</a>
                        <a href="/room-details" className="sider-item">Room Details</a>
                        <a href="/payments" className="sider-item">Payments</a>
                        <a href="/rules" className="sider-item">Hostel Rules</a>
                        <a href="/maintenance" className="sider-item">Maintenance Request</a>
                    </nav>
                </aside>

                {/* 4. Main Content Area */}
                {/* The background image and overlay will apply to this section based on the CSS provided */}
                <main className="main-content">
                    <h1>Welcome, Explorer!</h1>
                    <p>
                        This is the main area of your dashboard. The illustration of girls chatting 
                        in the common area should be visible faintly behind this text, 
                        thanks to the CSS background rules.
                    </p>

                    {/* This visual box is defined in your CSS but can be used for important callouts */}
                    <div className="content-visual-box">
                        <p>
                            **Visual Feature Box:** Your modern, secure, and friendly space awaits.
                            Connect, study, and thrive with friends!
                        </p>
                    </div>
                </main>

            </div>

        </div>
    );
};

export default HostelLayout;