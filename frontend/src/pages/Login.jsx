import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import rightImage from '../assets/auth-right-img.png'; // <-- Add image
import './Auth.css';
import Navbar from '../components/Navbar';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      window.location.href = '/';
      // const response = await axios.post('/api/login', formData);
      // if (response.data.success) {
      //   // Redirect to home page on successful login
      // } else {
      //   alert('Login failed. Please check your credentials.');
      // }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="auth-wrapper">
        
      <div className="auth-container">
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <label>Username *</label>
            <input name="username" required onChange={handleChange} />

            <label>Password *</label>
            <input type="password" name="password" required onChange={handleChange} />

            <button type="submit">
              <Link to="/"></Link>
              Login</button>
            <p className="link-text">
              New here? <Link to="/register">Create an account →</Link>
            </p>
          </form>
        </div>

        <div className="auth-right">
          <img src={rightImage} alt="Fashion Theme" className="auth-right-img" />
          <h1>Welcome to FashionFlow 🌿</h1>
          <p>
            A home for sustainable fashion lovers. Log in and start exchanging clothing
            that makes a difference.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
