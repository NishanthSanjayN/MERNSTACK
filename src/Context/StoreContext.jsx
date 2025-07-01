import React, { createContext, useEffect, useState, useMemo } from "react";
import { food_list } from "../assets/assets";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize cartItems from localStorage or set to empty object
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem("cartItems");
      try {
        return savedCart ? JSON.parse(savedCart) : {};
      } catch (error) {
        console.error("Invalid cart data in localStorage:", error);
        localStorage.removeItem("cartItems");
        return {};
      }
    }
    return {};
  });

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Get total cart items count
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems({});
  };

  // Sync cartItems to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log("Updated Cart Items:", cartItems);
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [cartItems]);

  // Memoize context value
  const contextValue = useMemo(() => ({
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    loading,
    error,
    setLoading,
    setError,
  }), [cartItems, loading, error]);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
