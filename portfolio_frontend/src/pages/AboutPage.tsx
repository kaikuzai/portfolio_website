import { FC } from "react";
import "../styles/AboutPage.css";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { aboutSkillsExport } from "../hooks/useAboutSkills";

const skills = aboutSkillsExport;

export const AboutPage: FC = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/skills");
  };
  return (
    <>
      <Navbar aboutPage={true} />
      <div className="about-container">
        <div className="about-content">
          <div className="about-grid">
            <div className="image-section">
              <img
                src="src/assets/headshot.JPEG"
                alt="Dylan"
                className="profile-image"
              />
              <button className="project-button" onClick={handleNavigate}>
                View My Projects
              </button>
            </div>

            <div className="info-section">
              <div className="header">
                <h1>Dylan</h1>
                <p className="title">
                  Data & Business Analyst | Cloud Solutions Engineer
                </p>
              </div>

              <div className="bio">
                <p>
                  I'm passionate about transforming complex data into actionable
                  insights and building scalable solutions that drive business
                  value. With expertise in data analysis, business intelligence,
                  and cloud architecture, I help organizations make data-driven
                  decisions.
                </p>
                <p>
                  What drives me in software development is the perfect blend of
                  analytical thinking and creative problem-solving. I believe in
                  creating efficient, user-friendly solutions that make a real
                  impact on business operations and decision-making processes.
                </p>
              </div>

              <div className="stats">
                <div className="stat-item">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">Netherlands</div>
                  <div className="stat-label">Based in</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-expertise-section">
            <h2>Technical Expertise</h2>

            <div className="about-skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-list">
                  {skills
                    .filter((skill) => skill.category === "languages")
                    .map((skill) => (
                      <span key={skill.name} className="skill-chip">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-list">
                  {skills
                    .filter((skill) => skill.category === "tools")
                    .map((skill) => (
                      <span key={skill.name} className="skill-chip">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Databases</h3>
                <div className="skill-list">
                  {skills
                    .filter((skill) => skill.category === "databases")
                    .map((skill) => (
                      <span key={skill.name} className="skill-chip">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Frameworks</h3>
                <div className="skill-list">
                  {skills
                    .filter((skill) => skill.category === "frameworks")
                    .map((skill) => (
                      <span key={skill.name} className="skill-chip">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Cloud</h3>
                <div className="skill-list">
                  {skills
                    .filter((skill) => skill.category === "cloud")
                    .map((skill) => (
                      <span key={skill.name} className="skill-chip">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
