import { Star, StarHalf } from "lucide-react";
import { useMemo, useState } from "react";
import { projectsExport, skillsExport } from "../hooks/useProjects";
import "../styles/SkillsPage.css";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="rating">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="star filled" />
      ))}
      {hasHalfStar && <StarHalf className="star filled" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="star" />
      ))}
    </div>
  );
}

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("data");
  const skills = skillsExport;
  const projects = projectsExport;

  const location = useLocation();
  const { skill: navigatedSkill } = location.state || {};

  useMemo(() => {
    if (
      navigatedSkill &&
      ["data", "cloud", "development"].includes(navigatedSkill)
    ) {
      setActiveCategory(navigatedSkill);
    }
  }, [navigatedSkill]);

  return (
    <>
      <Navbar />
      <div className="skill-details">
        {/* Category Navigation */}
        <nav className="category-nav">
          <button
            className={`category-button ${
              activeCategory === "data" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("data")}
          >
            Data Analysis
          </button>
          <button
            className={`category-button ${
              activeCategory === "development" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("development")}
          >
            Software Development
          </button>
          <button
            className={`category-button ${
              activeCategory === "cloud" ? "active" : ""
            }`}
            onClick={() => setActiveCategory("cloud")}
          >
            Cloud Solutions
          </button>
        </nav>

        <div className="content-wrapper">
          {/* Skills Section */}
          <section className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skills[activeCategory].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <RatingStars rating={skill.rating} />
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects[activeCategory].map((project, index) => (
                <div key={index} className="project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a href={project.link} className="project-link">
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
