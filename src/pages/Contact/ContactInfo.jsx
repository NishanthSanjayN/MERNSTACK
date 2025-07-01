import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <h2>Contact Information</h2>
      
      <div className="info-section">
        <div className="info-icon">🕒</div>
        <div className="info-content">
          <h3>Customer Support Hours</h3>
          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
          <p>Sunday: 12:00 PM - 5:00 PM</p>
          <p>(All times Eastern)</p>
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-icon">📍</div>
        <div className="info-content">
          <h3>Our Office</h3>
          <p>123 Commerce Street</p>
          <p>Suite 500</p>
          <p>New York, NY 10001</p>
          <p>United States</p>
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-icon">💼</div>
        <div className="info-content">
          <h3>Business Inquiries</h3>
          <p>For partnerships, wholesale, or press:</p>
          <p>business@yourstore.com</p>
        </div>
      </div>
      
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;