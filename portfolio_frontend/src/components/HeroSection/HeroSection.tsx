import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const imagePath = "src/assets/headshot.JPEG";

  return (
    <div className="hero-section">
      <img src={imagePath} alt="Your Name" className="hero-image" />
      <h1 className="hero-title">Hi, I'm Dylan Okyere</h1>
      <p className="hero-subtitle">
        Business IT & Management professional with experience in Data Analytics,
        Business Analysis, and Quality Assurance. Passionate about Cloud
        Computing and Software Architecture, I love creating impactful solutions
        that drive business success.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">View My Work</button>
        <button className="btn-secondary">Contact Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
