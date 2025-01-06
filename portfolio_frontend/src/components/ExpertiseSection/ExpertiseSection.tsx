import React from "react";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import "./ExpertiseSection.css";
import { cardsDataExport } from "../../hooks/useSkills";

interface CardData {
  icon: string;
  title: string;
  category_title: string;
  description: string;
  skills: string[];
}

const cardsData = cardsDataExport;

const ExpertiseSection: React.FC = () => {
  return (
    <div className="expertise-section">
      <h2 className="section-title">My Expertise</h2>
      <p className="section-subtitle">
        Explore my core competencies and project portfolio in these key areas
      </p>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <ExpertiseCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            skills={card.skills}
            category_title={card.category_title}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
