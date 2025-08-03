// src/MainPage.js
import React from 'react';
import NavBar from './Mycomponenet/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import resume from "./pages/resume";
import Services from './pages/Services';
import Skills from './pages/Skills';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Resume from "./pages/resume"; // Use uppercase 'Resume'


export default function MainPage() {
  return (
    <>
      <NavBar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="resume">
  <Resume />
</section>


      <section id="services">
        <Services />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Projects/>
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
