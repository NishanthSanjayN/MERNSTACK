import React, { useState, useEffect } from "react";
import "./DeliveryTracking.css";

// Simple icon components to replace lucide-react
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="status-icon">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="status-icon">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="status-icon">
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="status-icon">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="status-icon">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const DeliveryTracking = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Simulate fetching order data
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call like:
        // const response = await fetch(`/api/orders/${orderId}`);
        // const data = await response.json();
        
        // Simulated data for demonstration
        setTimeout(() => {
          const mockOrder = {
            id: "ORD-7829341",
            status: "in_transit",
            estimatedDelivery: "April 30, 2025, 8.30 AM",
            customer: {
              name: "Nishanth Sanjay",
              address: "123 Main Street, Apt 4B, New York, NY 10001"
            },
            tracking: {
              carrier: "Express Logistics",
              trackingNumber: "EL293847561US",
              currentLocation: "Distribution Center, Newark, NJ",
              lastUpdated: "Today at 9:45 AM"
            },
            progress: 65, // Percentage of delivery progress
            history: [
              {
                status: "Order Placed",
                timestamp: "April 30, 2025, 8.33 AM",
                description: "Order confirmed and payment received",
                completed: true
              },
              {
                status: "Processing",
                timestamp: "April 30, 2025, 8.35 AM",
                description: "Order has been processed and packed",
                completed: true
              },
              {
                status: "Shipped",
                timestamp: "April 30, 2025, 8:40 AM",
                description: "Package has left our warehouse",
                completed: true
              },
              {
                status: "In Transit",
                timestamp: "April 30, 2025, 8.45 AM",
                description: "Package is on its way to delivery address",
                completed: true
              },
              {
                status: "Out for Delivery",
                timestamp: "Expected April 30, 2025",
                description: "Package will be delivered today",
                completed: false
              },
              {
                status: "Delivered",
                timestamp: "Expected April 30, 2025",
                description: "Package delivered to recipient",
                completed: false
              }
            ]
          };
          
          setOrder(mockOrder);
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError("Failed to load order information. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchOrderData();
    
    // Set up real-time updates (in a real app, this might be a WebSocket connection)
    const updateInterval = setInterval(() => {
      // Simulate real-time updates
      setOrder(prevOrder => {
        if (!prevOrder) return null;
        
        // Randomly update progress sometimes
        if (Math.random() > 0.7 && prevOrder.progress < 95) {
          const newProgress = Math.min(prevOrder.progress + Math.floor(Math.random() * 5), 95);
          
          // Update status based on progress
          let updatedHistory = [...prevOrder.history];
          if (newProgress >= 80 && !prevOrder.history[4].completed) {
            updatedHistory[4] = {
              ...updatedHistory[4],
              completed: true,
              timestamp: new Date().toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })
            };
          }
          
          return {
            ...prevOrder,
            progress: newProgress,
            history: updatedHistory,
            status: newProgress >= 80 ? "out_for_delivery" : prevOrder.status,
            tracking: {
              ...prevOrder.tracking,
              lastUpdated: "Just now",
              currentLocation: newProgress >= 80 ? "Local Delivery Vehicle" : prevOrder.tracking.currentLocation
            }
          };
        }
        return prevOrder;
      });
    }, 8000);
    
    return () => clearInterval(updateInterval);
  }, []);
  
  const getStatusIcon = (status) => {
    switch(status) {
      case "Order Placed": return <PackageIcon />;
      case "Processing": return <ClockIcon />;
      case "Shipped": return <TruckIcon />;
      case "In Transit": return <TruckIcon />;
      case "Out for Delivery": return <MapPinIcon />;
      case "Delivered": return <CheckCircleIcon />;
      default: return <ClockIcon />;
    }
  };
  
  if (loading) {
    return (
      <div className="tracking-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading your order information...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="tracking-container">
        <div className="error-message">
          <p>{error}</p>
          <button className="retry-button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  if (!order) {
    return (
      <div className="tracking-container">
        <div className="error-message">
          <p>No order information found.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="tracking-container">
      <div className="tracking-header">
        <h1>Order Tracking</h1>
        <div className="order-details">
          <div className="order-id">
            <span className="label">Order ID:</span>
            <span className="value">{order.id}</span>
          </div>
          <div className="estimated-delivery">
            <span className="label">Estimated Delivery:</span>
            <span className="value">{order.estimatedDelivery}</span>
          </div>
        </div>
      </div>
      
      <div className="tracking-content">
        <div className="tracking-info-panel">
          <div className="tracking-progress">
            <div className="progress-bar">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${order.progress}%` }}
              ></div>
            </div>
            <div className="progress-percentage">{order.progress}% Complete</div>
          </div>
          
          <div className="current-status">
            <h2>Current Status</h2>
            <div className="status-card">
              <div className="status-info">
                <p className="current-status-text">
                  {order.status === "in_transit" && "In Transit"}
                  {order.status === "out_for_delivery" && "Out for Delivery"}
                  {order.status === "delivered" && "Delivered"}
                </p>
                <p className="status-location">{order.tracking.currentLocation}</p>
                <p className="status-update">Last update: {order.tracking.lastUpdated}</p>
              </div>
            </div>
          </div>
          
          <div className="delivery-details">
            <div className="detail-section">
              <h3>Delivery Address</h3>
              <p>{order.customer.name}</p>
              <p>{order.customer.address}</p>
            </div>
            
            <div className="detail-section">
              <h3>Tracking Information</h3>
              <p><span className="label">Carrier:</span> {order.tracking.carrier}</p>
              <p><span className="label">Tracking Number:</span> {order.tracking.trackingNumber}</p>
            </div>
          </div>
        </div>
        
        <div className="tracking-timeline">
          <h2>Delivery Progress</h2>
          <div className="timeline">
            {order.history.map((event, index) => (
              <div 
                key={index} 
                className={`timeline-item ${event.completed ? 'completed' : ''}`}
              >
                <div className="timeline-icon">
                  {getStatusIcon(event.status)}
                </div>
                <div className="timeline-content">
                  <h3>{event.status}</h3>
                  <p className="timeline-time">{event.timestamp}</p>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="tracking-actions">
        <button className="action-button primary">Contact Support</button>
        <button className="action-button secondary">View Order Details</button>
      </div>
    </div>
  );
};

export default DeliveryTracking;