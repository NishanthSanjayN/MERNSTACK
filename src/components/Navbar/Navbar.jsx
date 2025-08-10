// src/components/Navbar/Navbar.jsx
import React, { useContext, useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Get getTotalCartAmount from context
  const { getTotalCartAmount } = useContext(StoreContext);

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);

    const toast = document.createElement("div");
    toast.className = "search-toast";
    toast.textContent = `Searching for "${searchTerm}"`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 2000);
    }, 100);

    if (window.innerWidth > 750) {
      setShowSearch(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => setMenu("home")}
        className={menu === "home" ? "active" : ""}
      >
        <img src="/logo.png" alt="Company Logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="/contactus"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact
          </a>
        </li>
        <li>
          <Link
            to="/AboutUs"
            onClick={() => setMenu("AboutUs")}
            className={menu === "AboutUs" ? "active" : ""}
          >
            About-us
          </Link>
        </li>
        <li>
          <a
            href="/faq"
            onClick={() => setMenu("FAQ")}
            className={menu === "FAQ" ? "active" : ""}
          >
            FAQ
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-container" ref={searchContainerRef}>
          <div
            className={`navbar-search-icon ${showSearch ? "active" : ""}`}
            onClick={() => setShowSearch((prev) => !prev)}
          >
            <img src={assets.search_icon} alt="Search" className="search-icon-img" />
            <span className="search-icon-ring"></span>
          </div>

          {showSearch && (
            <form
              onSubmit={handleSearchSubmit}
              className={`navbar-search-form ${searchFocused ? "focused" : ""}`}
            >
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                autoComplete="off"
              />
              <button type="submit" className={searchTerm.length > 0 ? "active" : ""}>
                <img src={assets.search_icon} alt="Search" />
              </button>

              {searchTerm.length > 0 && (
                <span className="clear-search" onClick={() => setSearchTerm("")}>
                  ✕
                </span>
              )}

              {searchTerm.length > 0 && (
                <div className="search-suggestions">
                  <p>Suggestions:</p>
                  <div className="suggestion-item">🍕 Pizza</div>
                  <div className="suggestion-item">🍔 Burgers</div>
                  <div className="suggestion-item">🍜 Pasta</div>
                  <div className="suggestion-item">🥗 Salads</div>
                </div>
              )}
            </form>
          )}
        </div>

        <div className="navbar-search-icon cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)} className="sign-in-btn">
          Sign in
        </button>

        <div
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setMenu("home");
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#explore-menu"
              onClick={() => {
                setMenu("menu");
                setIsMobileMenuOpen(false);
              }}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#app-download"
              onClick={() => {
                setMenu("mobile-app");
                setIsMobileMenuOpen(false);
              }}
            >
              Mobile-App
            </a>
          </li>
          <li>
            <a
              href="/contactus"
              onClick={() => {
                setMenu("contact-us");
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </a>
          </li>
           <li>
            <a
              href="/AboutUs"
              onClick={() => {
                setMenu("AboutUs");
                setIsMobileMenuOpen(false);
              }}
            >
              About-Us
            </a>
          </li>
          <li>
            <a
              href="/faq"
              onClick={() => {
                setMenu("FAQ");
                setIsMobileMenuOpen(false);
              }}
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
