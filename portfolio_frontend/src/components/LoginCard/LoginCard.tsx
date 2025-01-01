import React from "react";
import "./LoginCard.css";
import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-card">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Do I know you?</p>
      <form className="login-form">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="button">
          Login
        </button>
      </form>
      <button className="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default LoginCard;
