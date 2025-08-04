import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const subheadings = [
    'Final year Student of D.Y.Patil.Collage',
    'Frontend Developer by weekday',
    'Pizza Chef by weekend – living the Full-stack life!',
  ];

  const [displayText, setDisplayText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentLine = subheadings[subIndex];

    let timeout;

    if (typing) {
      if (charIndex < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setSubIndex((prev) => (prev + 1) % subheadings.length);
          setTyping(true);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, subIndex]);

  const handleHireMeClick = () => {
    navigate('/contact');
  };

  return (
    <section className="home-container">
      <div className="text-section">
        <p className="greeting">HELLO WORLD!</p>
        <h1>
          I’m <span className="highlight">vaishnavi</span> <br />
          <span className="highlight">phapale</span>
        </h1>

        <p className="subheading">
          {displayText}
          <span className="cursor">|</span>
        </p>

        <div className="button-group">
          <button className="hire-btn" onClick={handleHireMeClick}>
            HIRE ME
          </button>
          <button className="work-btn">MY WORKS</button>
        </div>
      </div>

      <div className="image-section">
        <img src="/Assets/svg/profile3.svg" alt="Profile" />
      </div>
    </section>
  );
}
