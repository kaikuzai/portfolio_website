import React from "react";
import "../styles/HomePage.css";
import ExpertiseSection from "../components/ExpertiseSection/ExpertiseSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
    </>
  );
};

export default HomePage;
