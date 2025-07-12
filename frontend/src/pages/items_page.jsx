import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './items_page.css';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image4 from '../images/Men/mi9.jpg';
import image5 from '../images/Men/mi20.jpg';
import image6 from '../images/Women/wi25.jpg';



const items = [
  {
    id: 1,
    name: 'Casual Cotton Shirt',
    size: 'L',
    description: 'A lightweight cotton shirt, perfect for summer days.',
    image: image4,
  },
  {
    id: 2,
    name: 'Trendy Denim Jacket',
    size: 'M',
    description: 'Stylish denim jacket in great condition.',
    image: image5,
  },
  {
    id: 3,
    name: 'Elegant Evening Dress',
    size: 'S',
    description: 'Elegant dress for formal occasions, gently used.',
    image: image6,
  },
];

const ItemListPage = () => {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState([]);
  const cardsRef = useRef([]);

  // Fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <Navbar />
      <div className="item-list-wrapper">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="item-card fade-in"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="item-image-container hover-image-box">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="hover-description">{item.description}</div>
            </div>
            <div className="item-info">
              <div className="item-title-row">
                <h2 className="item-name">{item.name}</h2>
                <span
                  className={`heart-icon ${likedItems.includes(item.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(item.id)}
                >
                  ♥
                </span>
              </div>
              <p className="item-size">
                <strong>Size:</strong> {item.size}
              </p>
              <button
                className="explore-button pulse-on-hover"
                onClick={() => navigate('/item')}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ItemListPage;
