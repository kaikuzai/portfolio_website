import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const imagePath = "src/assets/headshot.JPEG";

  return (
    <div className="hero-section">
      <img src={imagePath} alt="Your Name" className="hero-image" />
      <h1 className="hero-title">Hi, I'm Dylan Okyere</h1>
      <p className="hero-subtitle">
        Hardworking Business IT & Management student seeking new opportunities
        to broaden their horizon in different IT-related facets. Experienced in
        Data Analysis, Quality Assurance and Agile project management with
        strong communication skills. Passionate about Big Data and Data
        Analytics. Committed to utilising my skills to further the mission of a
        company.
      </p>
      <div className="hero-buttons">
        <button className="btn-primary">View My Work</button>
        <button className="btn-secondary">Contact Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
