import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <div className="contact-map-container">
      <h2>Visit Our Store</h2>
      <div className="map-wrapper">
        {/* In a real app, you would integrate with Google Maps or another map service */}
        <div className="map-placeholder">
          <div className="map-pin"></div>
          <p>Map loading...</p>
          <p className="map-note">In a real implementation, this would be an interactive Google Map showing your store location.</p>
        </div>
      </div>
      <div className="store-details">
        <div className="store-info">
          <h3>Flagship Store</h3>
          <p>123 Commerce Street, New York, NY 10001</p>
          <p><strong>Hours:</strong> Mon-Sat: 10am-8pm, Sun: 11am-6pm</p>
        </div>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="directions-button">
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default ContactMap;