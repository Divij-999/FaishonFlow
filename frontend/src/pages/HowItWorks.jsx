// src/pages/HowItWorks.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="howitworks-wrapper">
      <Navbar />
      <div className="howitworks-container">
        <div className="howitworks-box">
          <h1>How It Works</h1>
          <p>
            <strong>ReWear</strong> is a sustainable fashion platform designed to promote clothing reuse through two core actions: <strong>Swapping</strong> and <strong>Donating</strong>.
          </p>
          <h2>Swap Requests</h2>
          <p>
            Users can browse through a wide variety of stylish pre-loved clothes. When a user finds an item they love, they can place a <strong>Swap Request</strong>. To swap, you must have enough <strong>Swap Points</strong>—a unique currency earned on ReWear.
          </p>
          <h2>Donations</h2>
          <p>
            Got clothes you no longer wear? Simply donate them to ReWear! When you donate, you earn <strong>Swap Points</strong> based on the type and quality of clothing. These points empower you to swap for items you adore.
          </p>
          <h2>Earn & Redeem</h2>
          <p>
            The more you donate, the more you can swap. This keeps fashion circular, affordable, and eco-conscious. It's a win-win for you and the planet!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
