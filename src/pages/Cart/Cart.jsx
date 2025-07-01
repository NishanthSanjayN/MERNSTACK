import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // Check if cart is empty - ADD NULL CHECK HERE
  const isCartEmpty = !cartItems || Object.values(cartItems).every(quantity => quantity === 0);

  // Add loading state if context data isn't ready
  if (!cartItems || !food_list) {
    return (
      <div className="cart">
        <h1>Your Shopping Cart</h1>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      
      {isCartEmpty ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button onClick={() => navigate('/explore-menu')}>Browse Menu</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <span>Items</span>
              <span>Title</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Remove</span>
            </div>
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-item">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                      <span>{cartItems[item._id]}</span>
                      <span>${(item.price * cartItems[item._id]).toFixed(2)}</span>
                      <span 
                        onClick={() => removeFromCart(item._id)} 
                        className="cross"
                        aria-label="Remove item"
                      >
                        ✕
                      </span>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          </div>
          
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount().toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? '0.00' : '2.00'}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount() === 0 ? '0.00' : (getTotalCartAmount() + 2).toFixed(2)}</b>
                </div>
              </div>
              <button 
                onClick={() => navigate('/order')}
                disabled={isCartEmpty}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
            
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo code" />
                  <button>APPLY</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;