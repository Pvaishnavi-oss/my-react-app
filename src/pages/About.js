import React from 'react';
import './About.css';
export default function About() {
  return (
    <div className="about-page">
      <div className="about-image">
        <img src="/Assets/svg/myphoto.jpg" alt="Vaishnavi Phapale" />
      </div>

      <div className="about-content">
        <h2 className="services-heading">
  <span className="overlay-text">About</span>
  About

</h2>
        <p>
          Hello! I'm <strong>Vaishnavi Phapale</strong>, a passionate frontend developer with a love for crafting
          beautiful, user-friendly web applications. With a strong foundation in React, Angular, and modern web
          technologies, I enjoy transforming ideas into interactive, pixel-perfect interfaces.
        </p>
        <p>
          I have hands-on experience with component-based architecture, API integration, responsive design, and version
          control using Git. I’m constantly learning and pushing my limits to build clean, scalable, and maintainable code.
        </p>
        <p>
          Beyond coding, I enjoy exploring UI/UX design, collaborating with teams, and turning visions into digital
          reality. I believe in writing code that not only works—but is a joy to maintain.
        </p>
      </div>
      
    </div>
  );
}
