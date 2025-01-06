import { FC } from "react";
import "../styles/AboutPage.css";
import Navbar from "../components/Navbar/Navbar";

interface Skill {
  name: string;
  category: "languages" | "tools" | "databases" | "frameworks" | "cloud";
}

const skills: Skill[] = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "R", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "TypeScript", category: "languages" },

  // Tools
  { name: "Looker Studio", category: "tools" },
  { name: "Tableau", category: "tools" },
  { name: "Power BI", category: "tools" },
  { name: "JIRA", category: "tools" },
  { name: "Git", category: "tools" },

  // Databases
  { name: "PostgreSQL", category: "databases" },
  { name: "MySQL", category: "databases" },
  { name: "MongoDB", category: "databases" },

  // Frameworks
  { name: "React", category: "frameworks" },
  { name: "Django", category: "frameworks" },
  { name: "Flask", category: "frameworks" },

  // Cloud
  { name: "AWS", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "Google Cloud", category: "cloud" },
];

export const AboutPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-grid">
            <div className="image-section">
              <img
                src="src/assets/headshot2.JPEG"
                alt="Dylan"
                className="profile-image"
              />
              <button className="project-button">View My Projects</button>
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
