import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Video Container */}
      <div className="hero-bg-container">
        <video
          className="hero-bg-video"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content Wrapper */}
      <div className="hero-content">

        {/* Navigation Bar */}
        <nav className="hero-nav">
          <div className="hero-nav__location">
            <span className="hero-nav__dot" />
            <span className="hero-nav__location-text">Kochi, India</span>
          </div>

          <div className="hero-nav__links">
            <a href="#home" className="hero-nav__link hero-nav__link--active">Home</a>
            <a href="#about" className="hero-nav__link">About</a>
            <a href="#projects" className="hero-nav__link">Projects</a>
            {/* <a href="#services" className="hero-nav__link">Services</a> */}
            <a href="#contact" className="hero-nav__link">Contact</a>
          </div>
        </nav>

        {/* DESKTOP HERO LAYOUT */}
        <div className="hero-desktop">
          {/* Intro Text & Divider Line 1 */}
          <div className="hero-desktop__intro-container">
            <span className="hero-desktop__intro-text">
              Hello, My Name is <strong>Abijith</strong>
            </span>
            <div className="hero-desktop__divider-line-1" />
          </div>

          {/* Product Title */}
          <h1 className="hero-desktop__title-product">FULL-STACK</h1>

          {/* Divider Line between Product and Designer */}
          <div className="hero-desktop__divider-line-mid" />

          {/* Paragraph & Designer Title Row */}
          <div className="hero-desktop__designer-row">
            <div className="hero-desktop__description">Architecting high performance production web applications, scalable API workflows, and robust backend systems. Specialized in taking end-to-end feature ownership with AI tools and frameworks with <strong>MERN stack</strong>.</div>

            {/* Designer Block (Title + Bottom Line starting at D) */}
            <div className="hero-desktop__designer-block">
              <h1 className="hero-desktop__title-designer">DEVELOPER</h1>
              <div className="hero-desktop__divider-line-bottom" />
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="hero-desktop__actions">
            <a href="mailto:abijithgkaimal@gmail.com" className="hero-talk-btn">
              <span className="hero-talk-btn__text">Let's Talk ↗</span>
              <div className="hero-talk-btn__circle" />
            </a>

            <a href="#projects" className="hero-works-btn">
              <span className="hero-works-btn__text">View My Works</span>
              <div className="hero-works-btn__icon-wrap">
                <svg className="hero-works-btn__icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* MOBILE HERO LAYOUT */}
        <div className="hero-mobile">
          <div className="hero-mobile__intro-row">
            <span className="hero-mobile__intro-text">
              Hello, My Name is <strong>Abijith</strong>
            </span>
            <div className="hero-mobile__intro-line" />
          </div>

          <div className="hero-mobile__titles">
            <h1 className="hero-mobile__title-product">FULL-STACK</h1>
            <h1 className="hero-mobile__title-designer">DEVELOPER</h1>
          </div>

          <div className="hero-mobile__cta-center">
            <a href="#projects" className="hero-mobile__works-btn">
              <span className="hero-mobile__works-btn-text">View My Works</span>
              <div className="hero-mobile__works-btn-icon-wrap">
                <svg className="hero-mobile__works-btn-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          </div>

          <div className="hero-mobile__description">
            Architecting high-performance production web applications, scalable API workflows, and robust backend systems. Specialized in taking end-to-end feature ownership using the <strong>MERN stack</strong>.
          </div>

          <div className="hero-mobile__talk-center">
            <a href="mailto:abijithgkaimal@gmail.com" className="hero-mobile__talk-btn">
              <span className="hero-mobile__talk-btn-text">Let's Talk ↗</span>
              <div className="hero-mobile__talk-btn-circle" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
