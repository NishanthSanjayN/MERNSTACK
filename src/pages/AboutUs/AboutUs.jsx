// src/pages/AboutUs/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Our Story</h1>
          <div className="tagline">From Farm to Table, With Love</div>
        </div>
      </div>
      
      <div className="content-section">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At FoodieFinds, we believe everyone deserves access to fresh, high-quality food. Our mission 
            is to connect local farmers and artisanal food producers directly with consumers, 
            eliminating unnecessary middlemen and ensuring fair prices for both producers and customers.
          </p>
        </div>
        
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly practices and packaging across our entire supply chain.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We support local farmers and food artisans to strengthen regional food economies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>We never compromise on freshness, taste, or nutritional value of our products.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💖</div>
              <h3>Transparency</h3>
              <p>We provide clear information about where and how our products are sourced.</p>
            </div>
          </div>
        </div>
        
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="/src/assets/sundar-pichai-image.webp"
                alt="Sundar Pichai"
                className="member-photo"
              />
              <h3>Sundar Pichai</h3>
              <p className="member-title">Founder & CEO</p>
              <p>With 15 years of experience in sustainable agriculture, Pichai's passion for healthy food drives our mission.</p>
            </div>
            <div className="team-member">
              <img
                src="/src/assets/Zoho-CEO-Sridhar-Vembu.webp"
                alt="Sridhar Vembu"
                className="member-photo"
              />
              <h3>Sridhar Vembu</h3>
              <p className="member-title">Head of Sourcing</p>
              <p>Vembu works directly with our network of farmers to ensure only the best products make it to your table.</p>
            </div>
            <div className="team-member">
              <img
                src="/src/assets/Zomato.webp"
                alt="Deepinder Goyal"
                className="member-photo"
              />
              <h3>Deepinder Goyal</h3>
              <p className="member-title">Customer Experience</p>
              <p>Goyal ensures every interaction with FoodieFinds exceeds expectations, from browsing to delivery.</p>
            </div>
            <div className="team-member">
              <img
                src="/src/assets/travis-kalanick-uber.webp"
                alt="Travis Kalanick"
                className="member-photo"
              />
              <h3>Travis Kalanick</h3>
              <p className="member-title">Head of Logistics</p>
              <p>Travis optimizes our delivery network to ensure your food arrives fresh and on time, every time.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Join Our Community</h2>
          <p>Experience the difference of truly fresh, locally-sourced food delivered to your door.</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;