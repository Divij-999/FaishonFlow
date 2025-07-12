// src/components/FeaturedCarousel.jsx
import React, { useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './FeaturedCarousel.css';
import logo from '../assets/logo.png';
import image1 from '../images/Men/mi1.jpg'
import image2 from '../images/Men/mi2.jpg'
import image3 from '../images/Women/wi2.jpg'
import image4 from '../images/Men/mi3.jpg'

const featuredItems = [
  {
    name: 'Elegant Evening Dress',
    size: 'M',
    description: 'Perfect for formal occasions.',
    image: image1,
  },
  {
    name: 'Casual Cotton Shirt',
    size: 'L',
    description: 'Comfortable and breathable.',
    image: image2,
  },
  {
    name: 'Trendy Denim Jacket',
    size: 'S',
    description: 'A must-have outerwear.',
    image: image3,
  },
  {
    name: 'Classic Blue Jeans',
    size: '32',
    description: 'Timeless wardrobe essential.',
    image: image4,
  },
];

const FeaturedCarousel = () => {
  const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.2, spacing: 10 },
      },
    },
    created(slider) {
      timer.current = setInterval(() => slider.next(), 3000);
    },
    destroyed() {
      clearInterval(timer.current);
    },
  });

  return (
    <section className="section">
      <div className="carousel-wrapper">
        <div className="carousel-header">
          <h2>Featured Items</h2>
          <div className="carousel-nav-buttons">
            <button className="carousel-btn" onClick={() => instanceRef.current?.prev()}>&lt;</button>
            <button className="carousel-btn" onClick={() => instanceRef.current?.next()}>&gt;</button>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider">
            
          {featuredItems.map((item, index) => (
            <div className="keen-slider__slide item-card" key={index} style={{ marginLeft: '85px' }}>
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <strong>{item.name}</strong>
                <p>Size: {item.size}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
