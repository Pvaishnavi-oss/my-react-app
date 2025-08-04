import React, { useEffect, useState } from 'react';
import './Home.css';


export default function Home() {
  const subheadings = [
    'Final year Student of D.Y.Patil.Collage,',
    'Frontend Developer by weekday,',
    'Pizza Chef by weekend – living the Full-stack life!',
  ];

  const [displayText, setDisplayText] = useState('');
  const [subIndex, setSubIndex] = useState(0); // current line
  const [charIndex, setCharIndex] = useState(0); // current character
  const [typing, setTyping] = useState(true); // typing or deleting

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
        }, 1500); // pause after typing line
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
        }, 500); // pause before next line
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, subIndex]);

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
          <button
            className="hire-btn"
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            HIRE ME
          </button>

          <button
            className="work-btn"
            onClick={() =>
              document
                .getElementById('project')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            MY WORKS
          </button>
        </div>
      </div>

      <div className="image-section">
        <img src="/Assets/svg/myphoto.jpg" alt="Vaishnavi Phapale" />
      </div>
    </section>
  );
}
