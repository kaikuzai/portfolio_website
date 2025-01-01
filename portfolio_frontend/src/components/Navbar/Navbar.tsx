import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Dylan Okyere</div>
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={handleHome}>
            Home
          </a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className="btn-login" onClick={handleLogin}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
