import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/auth-right-img.png';

const Navbar = () => {
  return (
    <header className="navbar">
     

    <div className="navbar-left">
    <Link to="/" className="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="brand-name">FashionFlow</h1>
    </Link>
    </div>

      <nav className="navbar-links">
        <Link to="/how-it-works">How it works</Link>
        <Link to="/donate" className="swap-button">Start Donating</Link>
        <Link to="/swapping" className="swap-button">Start Swapping</Link>
        <div
          className="profile-img"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/a-/AOh14GhTzVg")',
          }}
        ></div>
      </nav>
    </header>
  );
};

export default Navbar;
