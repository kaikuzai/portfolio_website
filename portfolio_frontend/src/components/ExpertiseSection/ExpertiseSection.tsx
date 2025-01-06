import React from "react";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import "./ExpertiseSection.css";

interface CardData {
  icon: string;
  title: string;
  category_title: string;
  description: string;
  skills: string[];
}

const cardsData: CardData[] = [
  {
    icon: "📊",
    title: "Data Analysis",
    category_title: "data",
    description:
      "Transforming raw data into actionable insights through statistical analysis and visualization.",
    skills: [
      "Statistical Analysis",
      "Data Visualization",
      "Predictive Modeling",
      "Python & R Programming",
    ],
  },
  {
    icon: "📈",
    title: "Business Analysis",
    category_title: "development",
    description:
      "Bridging the gap between business needs and technical solutions through strategic analysis.",
    skills: [
      "Requirements Gathering",
      "Process Optimization",
      "Stakeholder Management",
      "Solution Design",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    category_title: "cloud",
    description:
      "Designing and implementing scalable cloud infrastructure and solutions.",
    skills: [
      "AWS & Azure",
      "Cloud Architecture",
      "DevOps Practices",
      "Infrastructure as Code",
    ],
  },
];

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
