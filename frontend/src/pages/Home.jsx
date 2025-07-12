// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedCarousel from '../components/FeaturedCarousel';
import './Home.css';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import bg from '../assets/bg.png'

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section" style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
          <div className="hero-content">
            
            <div className="hero-buttons">
              <button className="primary-btn" style={{ marginTop: '510px' }}>Start swapping</button>
            </div>
          </div>
        </section>

        {/* Featured Carousel */}
        <FeaturedCarousel />

        {/* Categories */}
        <section className="section">
          <h2>Categories</h2>
          <div className="horizontal-scroll">
            {['Dresses', 'Shirts', 'Jackets', 'Jeans', 'Shoes'].map((category, index) => (
              <div className="category-card" key={index}>
                <img src={logo} alt={category} />
                <p>{category}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
