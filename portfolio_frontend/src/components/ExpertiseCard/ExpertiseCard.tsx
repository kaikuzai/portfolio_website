import React from "react";
import "./ExpertiseCard.css";

interface ExpertiseCardProps {
  icon: string; // Can be a string or a React component if you use actual icons
  title: string;
  description: string;
  skills: string[];
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  description,
  skills,
}) => {
  return (
    <div className="expertise-card">
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button className="btn-primary">View Projects</button>
    </div>
  );
};

export default ExpertiseCard;
