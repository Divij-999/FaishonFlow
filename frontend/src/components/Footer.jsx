import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>FashionFlow</h3>
          <p>
            Swap your style, save the planet. FashionFlow promotes sustainable fashion
            through community-driven clothing exchange.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
          <li><Link to="/sorry">FAQ</Link></li>
            <li><Link to="/sorry">Shipping</Link></li>
            <li><Link to="/sorry">Returns</Link></li>
            <li><Link to="/sorry">Support</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Follow us on Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FashionFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
