import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

interface PageLocation {
  page: "about" | "home" | "contact" | "login" | "register" | "skills";
}

const Navbar: React.FC<PageLocation> = ({ page }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        Dylan Okyere
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={handleHome}>
            Home
          </a>
        </li>
        <li className="about-link">
          <a href="/About">About</a>
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
      {page !== "about" ? (
        <button className="btn-about" onClick={handleAbout}>
          About me
        </button>
      ) : (
        <button className="btn-about" onClick={handleContact}>
          Contact
        </button>
      )}
    </nav>
  );
};

export default Navbar;
