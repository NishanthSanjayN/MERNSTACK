import React, { useState } from 'react';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactMap from './ContactMap';
import FAQ from './FAQ';
import './ContactUs.css';

const ContactUs = ({ setMenu }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form submission status after showing success message
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-us-container">
      <ContactHero />
      
      <div className="contact-content">
        <div className="contact-main">
          <ContactForm onSubmit={handleFormSubmit} formSubmitted={formSubmitted} />
          <ContactInfo />
        </div>
        
        <ContactMap />
        
        <div className="contact-faq-section">
          <h2>Frequently Asked Questions</h2>
          <p>Check out these common questions or browse our full <a href="#" onClick={(e) => {e.preventDefault(); setMenu("faq");}}>FAQ page</a>.</p>
          <FAQ simplified={true} setMenu={setMenu} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;