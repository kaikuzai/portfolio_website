import React from "react";
import "./RegisterCard.css";
import { useNavigate } from "react-router-dom";

const RegisterCard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="register-card">
      <h1 className="register-title">Register</h1>
      <p className="register-subtitle">because why not...</p>
      <form className="register-form">
        <label htmlFor="name" className="register-label">
          Name
        </label>
        <input
          type="text"
          id="first-name"
          className="name-input"
          placeholder="What is your name"
          required
        />
        <label htmlFor="email" className="register-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="email-input"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password" className="register-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="password-input"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="button">
          Register
        </button>
      </form>
      <button className="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default RegisterCard;
