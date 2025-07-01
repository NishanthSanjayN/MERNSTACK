import React, { useState } from 'react';
import './FAQ.css';

// Modified to accept setMenu as a prop and add filtering functionality
const FAQ = ({ setMenu }) => {
  // State to track which FAQ item is open
  const [openFAQ, setOpenFAQ] = useState(null);
  // State to track active category
  const [activeCategory, setActiveCategory] = useState('All Questions');
  
  // FAQ data with categories
  const faqData = [
    {
      question: "How does delivery work?",
      answer: "We deliver 7 days a week from 8am to 9pm. Choose a convenient 1-hour time slot during checkout. Our delivery team will bring your food fresh to your doorstep, and you'll receive real-time updates through our app. For orders over $50, delivery is free!",
      category: "Delivery"
    },
    {
      question: "What are your quality standards for produce?",
      answer: "We partner directly with local farmers who follow sustainable practices. All our fruits and vegetables are harvested at peak ripeness and delivered within 24-48 hours. We personally inspect each item for quality, and if something doesn't meet our standards, we won't sell it.",
      category: "Products"
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Yes! You can modify or cancel your order up to 12 hours before your scheduled delivery time. Simply log into your account, go to 'My Orders', and make the necessary changes. For assistance with last-minute changes, please contact our customer service team.",
      category: "Ordering"
    },
    {
      question: "Do you offer meal kits or prepared foods?",
      answer: "Absolutely! We offer both meal kits with pre-measured ingredients and easy-to-follow recipes, as well as chef-prepared meals ready to heat and eat. Our culinary team creates new options weekly, focusing on seasonal ingredients and diverse cuisines.",
      category: "Products"
    },
    {
      question: "How do you handle food allergies and dietary restrictions?",
      answer: "We take allergies and dietary needs seriously. Our website allows you to filter products based on common allergies and dietary preferences (gluten-free, dairy-free, vegan, etc.). Each product page includes detailed ingredient lists and nutritional information. For specific concerns, please contact our customer service team.",
      category: "Products"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. For regular customers, we also offer a convenient subscription billing option with a 5% discount on recurring orders.",
      category: "Payment"
    },
    {
      question: "Do you have a satisfaction guarantee?",
      answer: "Yes! We stand behind every product we sell. If you're not 100% satisfied with any item, simply contact us within 48 hours of delivery, and we'll either refund your purchase or replace the item at no additional cost to you. Your satisfaction is our priority.",
      category: "Products"
    },
    {
      question: "How do you package your deliveries to ensure freshness?",
      answer: "We use eco-friendly insulated packaging with refrigerated gel packs to maintain optimal temperature. Delicate items receive extra protection, and we separate items to prevent cross-contamination. Our packaging is either recyclable, compostable, or reusable—just leave it out for our driver to collect on your next delivery.",
      category: "Delivery"
    }
  ];

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Close any open FAQ when changing category
    setOpenFAQ(null);
  };

  // Handle the Contact Us button click
  const handleContactClick = (e) => {
    e.preventDefault();
    // Set menu to contact-us as shown in your example
    setMenu("contact-us");
    // Optional: Scroll to footer if needed
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter FAQs based on active category
  const filteredFAQs = activeCategory === 'All Questions' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  // Search functionality
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Reset active category when searching
    if (e.target.value) {
      setActiveCategory('All Questions');
    }
  };

  // Apply search filter if there's a search query
  const searchedFAQs = searchQuery 
    ? filteredFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFAQs;

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most common questions about our service, products, and policies.</p>
      </div>

      <div className="search-container">
        <div className="search-box">
          <i className="search-icon">🔍</i>
          <input 
            type="text" 
            placeholder="Search for answers..." 
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="categories">
        {['All Questions', 'Ordering', 'Delivery', 'Products', 'Payment'].map(category => (
          <div 
            key={category}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="faq-list">
        {searchedFAQs.length > 0 ? (
          searchedFAQs.map((faq, index) => (
            <div 
              className={`faq-item ${openFAQ === index ? 'open' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <div className="faq-icon">{openFAQ === index ? '−' : '+'}</div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found for your search. Please try different keywords or browse categories.</p>
          </div>
        )}
      </div>

      <div className="faq-contact">
        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <h3>Still have questions?</h3>
          <p>Our customer support team is here to help you with any questions or concerns.</p>
          
          <a 
            href="Contact-Us" 
            onClick={handleContactClick} 
            className="contact-button"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;