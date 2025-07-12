// src/pages/FacilityUnavailable.jsx
import React from 'react';
import './InfoPage.css';
import Navbar from '../components/Navbar';
const FacilityUnavailable = () => {
  return (
    <div>
        <Navbar />
        <div className="info-page-wrapper">
      <div className="info-box">
        <h1 className="info-title">Facility Unavailable</h1>
        <p className="info-text">
          We’re sorry! This facility is currently <strong>not available in your area</strong>.  
          We are working hard to expand our services and will be available soon in your location.  
          Stay tuned for updates!
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default FacilityUnavailable;
