import React from 'react';
import TechOrbit from '../../components/TechOrbit/TechOrbit';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">

      {/* Desktop Layout (visible on lg+) */}
      <div className="about-desktop">
        {/* Left Column: Interactive Tech Stack Orbit */}
        <div className="about-desktop__left">
          <div className="about-desktop__element-wrap">
            <TechOrbit />
          </div>
        </div>

        {/* Right Column: Heading & Paragraphs */}
        <div className="about-desktop__right">
          <h2 className="about-desktop__heading">About Me</h2>

          <div className="about-desktop__paragraphs">
            <p className="about-desktop__paragraph about-desktop__paragraph--indent-50">
              What started as a drive to solve complex logic and build seamless digital platforms grew into a dedicated career in full-stack engineering. After completing my <span className="about-desktop__bold">B.Tech in Computer Science Engineering (2021–2025)</span>, I stepped directly into building enterprise-grade web applications, robust database architectures, and high-performance user interfaces.
            </p>

            <p className="about-desktop__paragraph about-desktop__paragraph--indent-25">
              Based in <span className="about-desktop__bold">Alappuzha, India</span>. Currently working as a <span className="about-desktop__bold">Full-Stack Developer at Brynex Apparels Pvt Ltd</span> and <span className="about-desktop__bold">Frontend Developer at Dopamine Couch</span>. I thrive on translating intricate business needs into clean API contracts, role-based security frameworks, and intuitive front-end applications.
            </p>

            <div className="about-desktop__resume-wrap">
              <a
                href="/assets/Abijith_G_Kaimal_Resume.pdf"
                download="Abijith_G_Kaimal_Resume.pdf"
                className="resume-btn"
              >
                <span>Download Resume</span>
                <div className="resume-btn__circle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="resume-btn__arrow"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Stacked Layout (visible below lg) */}
      <div className="about-mobile">
        {/* Full-Stack Tech Orbit Element */}
        <div className="about-mobile__element-center">
          <div className="about-mobile__element-wrap">
            <TechOrbit />
          </div>
        </div>

        {/* Heading & Paragraphs */}
        <div className="about-mobile__text-wrap">
          <h2 className="about-mobile__heading">About Me</h2>

          <div className="about-mobile__paragraphs">
            <p className="about-mobile__paragraph about-mobile__paragraph--indent-10">
              What started as a drive to solve complex logic and build seamless digital platforms grew into a dedicated career in full-stack engineering. After completing my <span className="about-mobile__bold">B.Tech in Computer Science Engineering (2021–2025)</span>, I stepped directly into building enterprise-grade web applications, robust database architectures, and high-performance user interfaces.
            </p>

            <p className="about-mobile__paragraph about-mobile__paragraph--indent-5">
              Based in <span className="about-mobile__bold">Alappuzha, India</span>. Currently working as a <span className="about-mobile__bold">Full-Stack Developer at Brynex Apparels Pvt Ltd</span> and <span className="about-mobile__bold">Frontend Developer at Dopamine Couch</span>. I thrive on translating intricate business needs into clean API contracts, role-based security frameworks, and intuitive front-end applications.
            </p>

            <div className="about-mobile__resume-wrap">
              <a
                href="/assets/Abijith_G_Kaimal_Resume.pdf"
                download="Abijith_G_Kaimal_Resume.pdf"
                className="resume-btn"
              >
                <span>Download Resume</span>
                <div className="resume-btn__circle">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="resume-btn__arrow"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
