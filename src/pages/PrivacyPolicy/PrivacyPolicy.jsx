import React, { useState } from 'react';
import './PrivacyPolicy.css';
import { 
  FileText, 
  Settings, 
  MessageSquare, 
  Shield, 
  Smartphone, 
  BarChart, 
  Lock, 
  Users,
  Database,
  Eye,
  Clock,
  AlertTriangle 
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-header">
        <div className="privacy-header-content">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">
            How we collect, use, and protect your information at FoodieFinds
          </p>
          <p className="privacy-updated">Last Updated: April 28, 2025</p>
        </div>
      </div>

      <div className="privacy-content-wrapper">
        <div className="privacy-sidebar">
          <div className="sidebar-header">Quick Navigation</div>
          <ul className="sidebar-nav">
            <li 
              className={activeSection === 'introduction' ? 'active' : ''}
              onClick={() => scrollToSection('introduction')}
            >
              Introduction
            </li>
            <li 
              className={activeSection === 'information-collected' ? 'active' : ''}
              onClick={() => scrollToSection('information-collected')}
            >
              Information We Collect
            </li>
            <li 
              className={activeSection === 'usage' ? 'active' : ''}
              onClick={() => scrollToSection('usage')}
            >
              How We Use Your Information
            </li>
            <li 
              className={activeSection === 'sharing' ? 'active' : ''}
              onClick={() => scrollToSection('sharing')}
            >
              Information Sharing
            </li>
            <li 
              className={activeSection === 'cookies' ? 'active' : ''}
              onClick={() => scrollToSection('cookies')}
            >
              Cookies Policy
            </li>
            <li 
              className={activeSection === 'data-security' ? 'active' : ''}
              onClick={() => scrollToSection('data-security')}
            >
              Data Security
            </li>
            <li 
              className={activeSection === 'childrens-privacy' ? 'active' : ''}
              onClick={() => scrollToSection('childrens-privacy')}
            >
              Children's Privacy
            </li>
            <li 
              className={activeSection === 'your-rights' ? 'active' : ''}
              onClick={() => scrollToSection('your-rights')}
            >
              Your Privacy Rights
            </li>
            <li 
              className={activeSection === 'changes' ? 'active' : ''}
              onClick={() => scrollToSection('changes')}
            >
              Policy Changes
            </li>
            <li 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </li>
          </ul>
        </div>

        <div className="privacy-content">
          <section id="introduction" className="policy-section">
            <h2>Introduction</h2>
            <div className="section-content">
              <p>
                Welcome to FoodieFinds's Privacy Policy. At FoodFinds, we take your privacy seriously and are committed 
                to protecting any personal information you share with us. This Privacy Policy is designed to help you 
                understand how we collect, use, and safeguard your information when you visit our website, use our mobile 
                application, or engage with our services.
              </p>
              <p>
                By accessing or using FoodDelight's services, you agree to the collection and use of information in 
                accordance with this policy. We encourage you to read this Privacy Policy carefully to understand our 
                practices regarding your personal data.
              </p>
              <div className="info-card">
                <div className="info-card-header">Important Note</div>
                <div className="info-card-content">
                  This Privacy Policy applies to all users of our services, whether you're ordering food, browsing our 
                  menu, or simply visiting our website. If you do not agree with our policies and practices, your choice 
                  is to not use our services.
                </div>
              </div>
            </div>
          </section>

          <section id="information-collected" className="policy-section">
            <h2>Information We Collect</h2>
            <div className="section-content">
              <h3>Personal Information</h3>
              <p>
                We may collect various types of personal information from you when you register, place an order, 
                subscribe to our newsletter, respond to a survey, fill out a form, or use certain other site features:
              </p>
              <ul className="bullet-list">
                <li><strong>Contact Information</strong>: Name, email address, phone number, delivery address</li>
                <li><strong>Account Information</strong>: Username, password, account preferences</li>
                <li><strong>Payment Information</strong>: Credit card details, billing address, transaction history</li>
                <li><strong>Profile Information</strong>: Food preferences, dietary restrictions, order history</li>
                <li><strong>Demographic Information</strong>: Age, gender, location (when permitted)</li>
              </ul>

              <h3>Usage Information</h3>
              <p>
                We may also collect information about how you access and use our services:
              </p>
              <ul className="bullet-list">
                <li><strong>Device Information</strong>: Type of device, operating system, browser type</li>
                <li><strong>Log Data</strong>: IP address, browser details, pages visited, time and date of your visit</li>
                <li><strong>Location Data</strong>: Geographic location based on IP address or GPS (with permission)</li>
                <li><strong>Usage Patterns</strong>: How you interact with our services, including clicks and viewing time</li>
              </ul>
            </div>
          </section>

          <section id="usage" className="policy-section">
            <h2>How We Use Your Information</h2>
            <div className="section-content">
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <div className="usage-grid">
                <div className="usage-item">
                  <div className="usage-icon">
                    <FileText size={24} />
                  </div>
                  <div className="usage-text">
                    <strong>Order Processing</strong>
                    <p>To process and deliver your food orders, send order confirmations, and provide order updates</p>
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">
                    <Settings size={24} />
                  </div>
                  <div className="usage-text">
                    <strong>Service Improvement</strong>
                    <p>To improve our website, products, and services based on your feedback and interactions</p>
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">
                    <MessageSquare size={24} />
                  </div>
                  <div className="usage-text">
                    <strong>Customer Support</strong>
                    <p>To address your questions, provide assistance, and resolve complaints</p>
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">
                    <Shield size={24} />
                  </div>
                  <div className="usage-text">
                    <strong>Security</strong>
                    <p>To detect, prevent, and address technical issues, fraud, or illegal activities</p>
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">
                    <Smartphone size={24} />
                  </div>
                  <div className="usage-text">
                    <strong>Communication</strong>
                    <p>To send you service-related notifications, updates, and promotional content (with your consent)</p>
                  </div>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">
                    <BarChart size={24} />
                  </div>
                  <div className="usage-text">
                    <strong>Analytics</strong>
                    <p>To analyze usage patterns, trends, and preferences to enhance user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="sharing" className="policy-section">
            <h2>Information Sharing</h2>
            <div className="section-content">
              <p>
                We may share your personal information with the following parties:
              </p>
              <div className="info-table">
                <div className="table-row header">
                  <div className="table-cell">Who We Share With</div>
                  <div className="table-cell">Why We Share</div>
                </div>
                <div className="table-row">
                  <div className="table-cell"><strong>Delivery Partners</strong></div>
                  <div className="table-cell">To facilitate the delivery of your food orders</div>
                </div>
                <div className="table-row">
                  <div className="table-cell"><strong>Payment Processors</strong></div>
                  <div className="table-cell">To process your payments securely</div>
                </div>
                <div className="table-row">
                  <div className="table-cell"><strong>Service Providers</strong></div>
                  <div className="table-cell">Who help us operate our business and provide services</div>
                </div>
                <div className="table-row">
                  <div className="table-cell"><strong>Marketing Partners</strong></div>
                  <div className="table-cell">To deliver relevant advertisements and promotions (with consent)</div>
                </div>
                <div className="table-row">
                  <div className="table-cell"><strong>Legal Authorities</strong></div>
                  <div className="table-cell">When required by law or to protect our rights and safety</div>
                </div>
              </div>
              <p>
                We do not sell your personal information to third parties. When we share information with service 
                providers, we ensure they use it only for the specified purposes and comply with relevant privacy laws.
              </p>
            </div>
          </section>

          <section id="cookies" className="policy-section">
            <h2>Cookies Policy</h2>
            <div className="section-content">
              <p>
                FoodDelight uses cookies and similar tracking technologies to track activity on our service and hold 
                certain information. Cookies are files with small amounts of data that may include an anonymous unique 
                identifier.
              </p>
              <h3>Types of Cookies We Use</h3>
              <div className="cookies-wrapper">
                <div className="cookie-type">
                  <h4>Essential Cookies</h4>
                  <p>Necessary for the website to function properly, including authentication and security</p>
                </div>
                <div className="cookie-type">
                  <h4>Preference Cookies</h4>
                  <p>Remember your settings and preferences for a better experience</p>
                </div>
                <div className="cookie-type">
                  <h4>Analytics Cookies</h4>
                  <p>Help us understand how users interact with our website</p>
                </div>
                <div className="cookie-type">
                  <h4>Marketing Cookies</h4>
                  <p>Track browsing habits and deliver targeted advertising</p>
                </div>
              </div>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>
          </section>

          <section id="data-security" className="policy-section">
            <h2>Data Security</h2>
            <div className="section-content">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="security-features">
                <div className="security-feature">
                  <div className="security-icon">
                    <Lock size={24} />
                  </div>
                  <div className="security-text">
                    <strong>Encryption</strong>
                    <p>All sensitive information is encrypted using SSL technology</p>
                  </div>
                </div>
                <div className="security-feature">
                  <div className="security-icon">
                    <Shield size={24} />
                  </div>
                  <div className="security-text">
                    <strong>Secure Networks</strong>
                    <p>Protected networks with firewall and intrusion detection systems</p>
                  </div>
                </div>
                <div className="security-feature">
                  <div className="security-icon">
                    <Users size={24} />
                  </div>
                  <div className="security-text">
                    <strong>Access Controls</strong>
                    <p>Strict employee access controls to personal information</p>
                  </div>
                </div>
                <div className="security-feature">
                  <div className="security-icon">
                    <Eye size={24} />
                  </div>
                  <div className="security-text">
                    <strong>Regular Audits</strong>
                    <p>Continuous monitoring and security audits of our systems</p>
                  </div>
                </div>
              </div>
              <p>
                While we strive to use commercially acceptable means to protect your personal information, no method 
                of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its 
                absolute security.
              </p>
            </div>
          </section>

          <section id="childrens-privacy" className="policy-section">
            <h2>Children's Privacy</h2>
            <div className="section-content">
              <p>
                Our services are not intended for individuals under the age of 16. We do not knowingly collect 
                personally identifiable information from children under 16. If you are a parent or guardian and you 
                are aware that your child has provided us with personal data, please contact us so that we can take 
                necessary actions.
              </p>
              <div className="info-card warning">
                <div className="info-card-header">Important Notice</div>
                <div className="info-card-content">
                  If we discover that we have collected personal information from a child under age 16 without 
                  verification of parental consent, we will promptly delete that information.
                </div>
              </div>
            </div>
          </section>

          <section id="your-rights" className="policy-section">
            <h2>Your Privacy Rights</h2>
            <div className="section-content">
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <div className="rights-accordion">
                <div className="rights-item">
                  <h3>Right to Access</h3>
                  <p>You can request information about the personal data we hold about you and how it's being used.</p>
                </div>
                <div className="rights-item">
                  <h3>Right to Rectification</h3>
                  <p>You can request that we correct or update any inaccurate personal information.</p>
                </div>
                <div className="rights-item">
                  <h3>Right to Erasure</h3>
                  <p>In certain circumstances, you can request that we delete your personal information.</p>
                </div>
                <div className="rights-item">
                  <h3>Right to Restrict Processing</h3>
                  <p>You can request that we limit how we use your personal information.</p>
                </div>
                <div className="rights-item">
                  <h3>Right to Data Portability</h3>
                  <p>You can request a copy of your data in a machine-readable format.</p>
                </div>
                <div className="rights-item">
                  <h3>Right to Object</h3>
                  <p>You can object to the processing of your personal information for certain purposes.</p>
                </div>
              </div>
              <p>
                To exercise any of these rights, please contact us using the information provided in the "Contact Us" 
                section. We will respond to your request within the timeframe required by applicable law.
              </p>
            </div>
          </section>

          <section id="changes" className="policy-section">
            <h2>Policy Changes</h2>
            <div className="section-content">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              <p>
                We recommend reviewing this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
                are effective when they are posted on this page.
              </p>
              <div className="info-card">
                <div className="info-card-header">Stay Informed</div>
                <div className="info-card-content">
                  For significant changes to this Privacy Policy, we will make reasonable efforts to provide notification 
                  through our website or by email if we have your contact information.
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="policy-section">
            <h2>Contact Us</h2>
            <div className="section-content">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>Email:</strong> privacy@fooddelight.com
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> 123 Food Street, Cuisine City, FC 10001
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> (555) 123-4567
                </div>
              </div>
              <div className="contact-form-wrapper">
                <h3>Send us a message</h3>
                <div className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <button className="submit-button">Submit</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;