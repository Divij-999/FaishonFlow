import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './ItemListing.css';

const ItemListing = () => {
  const navigate = useNavigate();

  return (
    <div className="item-wrapper">
      <div className="item-container">
        {/* Left - Main Product Image */}
        <div className="item-left">
          <img src={logo} alt="Main product" className="item-main-img" />
          <div className="item-gallery">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={logo}
                alt={`Product ${i}`}
                className="item-thumb"
              />
            ))}
          </div>
           <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
        </div>

        {/* Right - Product Info */}
        <div className="item-right">
          <h2 className="item-title">Elegant Evening Dress</h2>
          <p className="item-desc">
            This elegant evening dress is perfect for formal events. Made from high-quality fabric, it offers both style and comfort. Gently used and in excellent condition.
          </p>

          {/* Additional Info Section */}
          <div className="item-details">
            <p><strong>Size:</strong> M</p>
            <p><strong>Points:</strong> 120</p>
            <p><strong>Listed by:</strong> Jane Doe</p>
            <p><strong>Available:</strong> Yes</p>
          </div>

          <button className="item-btn">Swap Now</button>
        </div>
      </div>

      {/* Back Button */}
     
    </div>
  );
};

export default ItemListing;
