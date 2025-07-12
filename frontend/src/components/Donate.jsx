import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './donate.css';
import logo from './logo.png'; // Default logo

const DonationForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    size: '',
    category: '',
  });

  const categories = ['Jeans', 'Shirt', 'T-shirt', 'Dress', 'Accessories'];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const deleteImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Images:', images);
  };

  return (
    <div className="item-wrapper">
      <div className="item-container">
        {/* Left - Image Previews */}
        <div className="item-left">
  <img
    src={images[0] || logo}
    alt="Main product"
    className="item-main-img"
  />

  <div className="item-gallery">
    {images.map((img, index) => (
      <div key={index} className="thumb-wrapper">
        <img src={img} alt={`Thumb ${index + 1}`} className="item-thumb" />
        <button
          className="delete-btn"
          onClick={() => deleteImage(index)}
          type="button"
        >
          ✕
        </button>
      </div>
    ))}
  </div>

  {/* Action Buttons Container */}
  <div className="image-actions">
    <input
      type="file"
      multiple
      accept="image/*"
      ref={fileInputRef}
      onChange={handleImageUpload}
      style={{ display: 'none' }}
    />
    <button className="add-image-btn" onClick={triggerFileSelect} type="button">
      + Add Image
    </button>

    <button className="back-button" onClick={() => navigate(-1)} type="button">
      ← Back
    </button>
  </div>
</div>


        {/* Right - Form */}
        <div className="item-right">
          <h2 className="item-title">Donate an Item</h2>

          <form onSubmit={handleSubmit} className="donation-form">
            <input
              type="text"
              name="title"
              placeholder="Item Title"
              value={formData.title}
              onChange={handleInputChange}
              className="donation-input"
              required
            />

            <textarea
              name="description"
              placeholder="Item Description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="donation-input"
              required
            />

            <input
              type="text"
              name="size"
              placeholder="Size (e.g., S, M, L)"
              value={formData.size}
              onChange={handleInputChange}
              className="donation-input"
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="donation-input"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button type="submit" className="item-btn">
              Submit Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
