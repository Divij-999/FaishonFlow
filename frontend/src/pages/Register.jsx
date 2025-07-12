import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import rightImage from '../assets/auth-right-img.png'; // <-- Add your image here
import './Auth.css';
import Navbar from '../components/Navbar';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    country_code: '',
    phone_number: '',
    bio: '',
    profile_picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   data.append(key, value);
    // });
    // try {
    //   await axios.post('http://localhost:8000/api/register/', data);
    //   alert('Registered successfully!');
    // } catch (err) {
    //   alert('Error: ' + JSON.stringify(err.response?.data || err.message));
    // }
    
      window.location.href = '/';
  };

  return (
    <div>
    <Navbar/>
    <div className="auth-wrapper">
        
      <div className="auth-container">
        <div className="auth-left">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data" >
            <label>Username *</label>
            <input name="username" required onChange={handleChange} />

            <label>Email *</label>
            <input type="email" name="email" required onChange={handleChange} />

            <label>Password *</label>
            <input type="password" name="password" required onChange={handleChange} />

            <label>Confirm Password *</label>
            <input type="password" name="password2" required onChange={handleChange} />

            <label>Country Code</label>
            <input name="country_code" placeholder="+91" onChange={handleChange} />

            <label>Phone Number</label>
            <input name="phone_number" placeholder="9876543210" pattern="[6-9]\d{9}" onChange={handleChange} />

            <label>Bio</label>
            <textarea name="bio" rows="2" onChange={handleChange} placeholder="Tell us something..." />

            <label>Profile Picture</label>
            <input type="file" name="profile_picture" accept="image/*" onChange={handleChange} />

            <button type="submit">Register</button>
            <p className="link-text">
              Already a member? <Link to="/login">Login here →</Link>
            </p>
          </form>
        </div>

        <div className="auth-right">
          <img src={rightImage} alt="Fashion Theme" className="auth-right-img" />
          <h1>Clothes With a Cause 🌱</h1>
          <p>
            ReWear isn’t just a platform — it’s a movement.
            Trade clothes, make friends, and reduce fashion waste together.
            Your unused fashion could be someone’s new favorite.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
