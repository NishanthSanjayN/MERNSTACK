import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <div className="contact-hero">
      <div className="contact-hero-content">
        <h1>Get in Touch</h1>
        <p>We're here to help with any questions about our products, orders, or services.</p>
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>support@yourstore.com</p>
          </div>
          <div className="contact-method">
            <div className="contact-icon">📱</div>
            <h3>Call Us</h3>
            <p>(555) 123-4567</p>
          </div>
          <div className="contact-method">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 9am-7pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;