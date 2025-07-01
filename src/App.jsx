import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import FAQ from './pages/FAQ/FAQ';
import DeliveryTracking from './pages/Delivery/DeliveryTracking';
import AboutUs from './pages/AboutUs/AboutUs';

// Login Popup
import LoginPopUp from './components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [category, setCategory] = useState('All');

  return (
    <>
      {showLogin && <LoginPopUp />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route 
            path="/" 
            element={<Home category={category} setCategory={setCategory} />} 
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/deliverytracking" element={<DeliveryTracking />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;