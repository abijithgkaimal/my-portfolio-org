import React, { useState, useEffect } from 'react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index whenever project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Lock body scroll when modal is active & add keyboard shortcuts
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, activeImageIndex]);

  if (!project) return null;

  const images = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="project-modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Body: Image Carousel + Info Details */}
        <div className="project-modal-grid">
          
          {/* Slider Column */}
          <div className="project-modal-slider-wrap">
            <div className="project-modal-main-img-box">
              <img
                src={images[activeImageIndex]}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                className="project-modal-main-img"
              />

              {/* Slider Arrows (Only if > 1 image) */}
              {images.length > 1 && (
                <>
                  <button
                    className="project-modal-nav-btn project-modal-nav-btn--prev"
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    className="project-modal-nav-btn project-modal-nav-btn--next"
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>

                  {/* Counter Tag */}
                  <div className="project-modal-counter">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Strip (if > 1 image) */}
            {images.length > 1 && (
              <div className="project-modal-thumbnails">
                {images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    className={`project-modal-thumb-btn ${idx === activeImageIndex ? 'project-modal-thumb-btn--active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="project-modal-thumb-img" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="project-modal-info">
            <span className="project-modal-badge">{project.subtitle}</span>
            <h2 className="project-modal-title">{project.title}</h2>

            <p className="project-modal-full-desc">{project.fullDescription || project.description}</p>

            {/* Tech Stack Tags */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="project-modal-tech-section">
                <h4 className="project-modal-section-title">Technologies Used</h4>
                <div className="project-modal-tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            {project.features && project.features.length > 0 && (
              <div className="project-modal-features-section">
                <h4 className="project-modal-section-title">Key Highlights</h4>
                <ul className="project-modal-features-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-modal-feature-item">
                      <span className="project-modal-feature-bullet">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Live Demo or Project Action Buttons */}
            {project.links && project.links.length > 0 ? (
              <div className="project-modal-actions">
                {project.links.map((linkItem, idx) => (
                  <a
                    key={idx}
                    href={linkItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-link-btn"
                  >
                    <span>{linkItem.label || 'Visit Live ↗'}</span>
                  </a>
                ))}
              </div>
            ) : project.link ? (
              <div className="project-modal-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link-btn"
                >
                  <span>Visit Project Live ↗</span>
                </a>
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
