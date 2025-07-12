import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import rightImage from '../assets/auth-right-img.png'; // <-- Add image
import './Auth.css';
import GoogleLoginButton from "../components/GoogleLoginButton";

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
      await axios.post('http://localhost:8000/api/login/', formData);
      alert('Login successful!');
    } catch (err) {
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            <label>Username *</label>
            <input name="username" required onChange={handleChange} />

            <label>Password *</label>
            <input type="password" name="password" required onChange={handleChange} />

            <button type="submit">Login</button>
            
            <div className="or-separator">
              <span>or</span>
            </div>

            <div className="google-container">
              <GoogleLoginButton />
            </div>
            <p className="link-text">
              New here? <Link to="/register">Create an account →</Link>
            </p>
          </form>
        </div>

        <div className="auth-right">
          <img src={rightImage} alt="Fashion Theme" className="auth-right-img" />
          <h1>Welcome to ReWear 🌿</h1>
          <p>
            A home for sustainable fashion lovers. Log in and start exchanging clothing
            that makes a difference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
