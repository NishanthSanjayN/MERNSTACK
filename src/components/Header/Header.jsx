import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // React Router hook

  const handleViewMenu = () => {
    navigate('/explore-menu'); 
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>First Bite Love – Gourmet Meals So Good, You'll Crave Them Daily!</p>
        <button 
          onClick={handleViewMenu}
          className="menu-button"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
