
// src/pages/Project.js
import React from 'react';
import './project.css';

export default function Project() {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">
        <span className="overlay-text">Projects</span>
        Project
      </h2>

      <div className="project-images">
        <div className="project-card">
          <img src="/Assets/svg/global.png" alt="Project 1" className="project-img" />
          <p className="project-title">global biotech</p>
        </div>

        <div className="project-card">
          <img src="/Assets/svg/globalc.png" alt="Project 2" className="project-img" />
          <p className="project-title">customer page</p>
        </div>
      </div>
    </div>
  );
}
