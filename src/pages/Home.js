// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <div className="text-section">
        <p className="greeting">HELLO WORLD!</p>
        <h1>
          I’m <span className="highlight">vaishnavi</span> <br />
          <span className="highlight">phapale</span>
        </h1>

        <p className="subheading">Frontend Developer</p>

        <div className="button-group">
          <button className="hire-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
  HIRE ME
</button>

<button className="work-btn" onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })}>
  MY WORKS
</button>
        </div>
      </div>

      <div className="image-section">
        <img src="/Assets/svg/myphoto.jpg" alt="Profile" />
      </div>
    </section>
  );
}
