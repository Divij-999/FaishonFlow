// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedCarousel from '../components/FeaturedCarousel';
import './Home.css';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import bg from '../assets/bg.png'
// import dressesImg from '../assets/categories/dresses.png';
import image4 from '../images/Women/wi4.jpg'

import shirtsImg from '../images/Men/mi10.jpg';
import jacketsImg from '../images/Men/mi14.jpg';
import jeansImg from '../images/Men/mi18.jpg';
import shoesImg from '../images/Men/mi1.jpg';

// List of categories with image and name
const categories = [
  { name: 'Dresses', image: image4 },
  { name: 'Shirts', image: shirtsImg },
  { name: 'Jackets', image: jacketsImg },
  { name: 'Jeans', image: jeansImg },
  { name: 'Shoes', image: shoesImg },
];


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
              <button className="primary-btn"  style={{ marginTop: '510px' }}><a href='/swapping' style={{color:'white', textDecoration:"None"}}>Start swapping</a> </button>
              {/* <Link to="/swapping" className="swap-button">Start Swapping</Link> */}

            </div>
          </div>
        </section>

        {/* Featured Carousel */}
        <FeaturedCarousel />

        {/* Categories */}
        <section className="section">
          <h2>Categories</h2>
          <div className="horizontal-scroll">
            {categories.map((category, index) => (
              <div className="category-card" key={index}>
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
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
