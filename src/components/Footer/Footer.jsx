import React, { useState } from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function Footer() {
  const [menu, setMenu] = useState("home"); 

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/" 
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}>
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="logo" 
              style={{ width: "200px", height: "auto" }} 
            />
          </Link>
          <p>
  <strong style={{ color: '#FF8C00', fontSize: '1.1em' }}>FoodieFinds</strong> is your ultimate culinary destination, where passion for food meets digital convenience. 
  Our beautifully crafted platform showcases gourmet delights with stunning visuals that make your mouth water 
  before you even take a bite. Enjoy effortless browsing with smart recommendations tailored just for your taste buds, 
  lightning-fast checkout, and reliable delivery that brings restaurant-quality meals to your doorstep. 
  Join thousands of satisfied food lovers who trust <span style={{ color: '#FF8C00', fontWeight: '600' }}>FoodieFinds</span> for their everyday cravings and special occasion feasts.
</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul className="footer-menu">
            <li>
              <Link to="/" 
                onClick={() => setMenu("home")}
                className={menu === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" 
                onClick={() => setMenu("about")}
                className={menu === "about" ? "active" : ""}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/DeliveryTracking" 
                onClick={() => setMenu("delivery")}
                className={menu === "delivery" ? "active" : ""}>
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" 
                onClick={() => setMenu("privacy")}
                className={menu === "privacy" ? "active" : ""}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+1-212-456-7890">+1-212-456-7890</a></li>
            <li><a href="mailto:contact@FoodieFinds.com">contact@FoodieFinds.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2025 @ FoodieFinds.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;