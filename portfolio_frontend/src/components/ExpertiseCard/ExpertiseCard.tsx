import React from "react";
import "./ExpertiseCard.css";
import { useNavigate } from "react-router-dom";

interface ExpertiseCardProps {
  icon: string; // Can be a string or a React component if you use actual icons
  title: string;
  category_title: string;
  description: string;
  skills: string[];
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  description,
  skills,
  category_title,
}) => {
  const navigate = useNavigate();

  const handleViewSkill = () => {
    navigate("/skills", {
      state: {
        skill: category_title,
      },
    });
  };
  return (
    <div className="expertise-card">
      <img className="icon" src={icon}></img>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <ul className="skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button
        className="btn-primary"
        onClick={() => {
          handleViewSkill();
        }}
      >
        View Projects
      </button>
    </div>
  );
};

export default ExpertiseCard;
