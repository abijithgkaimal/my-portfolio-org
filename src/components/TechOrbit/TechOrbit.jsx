import React, { useState, useEffect } from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiPostgresql,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
} from 'react-icons/si';
import './TechOrbit.css';

const allTechs = [
  { name: 'React', category: 'Frontend Framework', Icon: SiReact, color: '#61DAFB', bg: '#e6f9ff' },
  { name: 'Next.js', category: 'Full-Stack Framework', Icon: SiNextdotjs, color: '#000000', bg: '#ffffff' },
  { name: 'Node.js', category: 'Backend Runtime', Icon: SiNodedotjs, color: '#339933', bg: '#edf7ed' },
  { name: 'NestJS', category: 'Scalable Backend API', Icon: SiNestjs, color: '#E0234E', bg: '#ffeef2' },
  { name: 'MongoDB', category: 'NoSQL Database', Icon: SiMongodb, color: '#47A248', bg: '#eef9ef' },
  { name: 'PostgreSQL', category: 'Relational DB', Icon: SiPostgresql, color: '#4169E1', bg: '#eef3ff' },
  { name: 'JavaScript', category: 'Core Language', Icon: SiJavascript, color: '#F7DF1E', bg: '#fffde6' },
  { name: 'TypeScript', category: 'Typed Language', Icon: SiTypescript, color: '#3178C6', bg: '#edf4fc' },
  { name: 'Express.js', category: 'REST API Framework', Icon: SiExpress, color: '#000000', bg: '#f4f4f4' },
  { name: 'Tailwind CSS', category: 'UI Styling Engine', Icon: SiTailwindcss, color: '#06B6D4', bg: '#e6fafc' },
  { name: 'HTML5', category: 'Web Structure', Icon: SiHtml5, color: '#E34F26', bg: '#ffefe9' },
  { name: 'CSS3', category: 'Modern Styling', Icon: SiCss, color: '#1572B6', bg: '#ebf5fc' },
];

function TechOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance spotlight tech every 2.4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allTechs.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeTech = allTechs[activeIndex];

  return (
    <div
      className="tech-spotlight-stage"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className="tech-spotlight-glow"
        style={{ '--brand-glow': activeTech.color }}
      />

      {/* Orbit Track Guide */}
      <div className="tech-spotlight-track" />

      {/* Center Spotlight Card */}
      <div
        key={activeTech.name}
        className="tech-spotlight-center"
        style={{
          '--brand-color': activeTech.color,
          '--brand-bg': activeTech.bg,
        }}
      >
        <div className="tech-spotlight-center-badge">
          <activeTech.Icon className="tech-spotlight-center-icon" />
        </div>
        <div className="tech-spotlight-center-info">
          <h3 className="tech-spotlight-center-title">{activeTech.name}</h3>
          <span className="tech-spotlight-center-sub">{activeTech.category}</span>
        </div>
      </div>

      {/* Equally Spaced Revolving Constellation Ring */}
      <div className="tech-spotlight-ring">
        {allTechs.map((tech, index) => {
          const angle = (360 / allTechs.length) * index - 90; // Exactly 30° spacing starting top
          const isActive = index === activeIndex;

          return (
            <div
              key={tech.name}
              className={`tech-spotlight-node-wrap ${isActive ? 'tech-spotlight-node-wrap--active' : ''}`}
              style={{
                transform: `rotate(${angle}deg) translate(var(--spotlight-radius))`,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`tech-spotlight-node ${isActive ? 'tech-spotlight-node--active' : ''}`}
                style={{
                  '--brand-color': tech.color,
                  '--brand-bg': tech.bg,
                  '--init-angle': `${angle}deg`,
                }}
              >
                <tech.Icon className="tech-spotlight-icon" />
                <span className="tech-spotlight-tooltip">{tech.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechOrbit;
