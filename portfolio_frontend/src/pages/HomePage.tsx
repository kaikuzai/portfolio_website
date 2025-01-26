import React from "react";
import ExpertiseSection from "../components/ExpertiseSection/ExpertiseSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Navbar page="home" />
      <HeroSection />
      <ExpertiseSection />
      <Footer />
    </div>
  );
};

export default HomePage;
