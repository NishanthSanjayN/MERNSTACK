import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { useNavigate } from "react-router-dom";

function FoodDisplay({ category }) {
  const { food_list, cartItems, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleFoodClick = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div className="food-item-container" key={index}>
                <div 
                  className="food-item-link" 
                  onClick={() => handleFoodClick(item._id)}
                >
                  <FoodItem
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
                <div className="food-item-add">
                  <p>Quantity: {cartItems[item._id] || 0}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item._id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;