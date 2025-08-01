import React from "react";
import "./Skills.css";

const skillsData = [
  { name: "React Native", level: 50},
  { name: "React.js", level: 50 },
  { name: "Next.js", level: 55 },
  { name: "Node.js", level: 45 },
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 50 },
  { name: "C & C++", level: 30 },
  { name: "Figma", level: 20 },
  { name: "Git & GitHub", level: 85 },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <p className="skills-description">
          "Code whisperer by day, bug-squasher by night—creating smooth apps and websites one line at a time."
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
