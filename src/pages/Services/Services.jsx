import React from 'react';
import './Services.css';

function Services() {
  const servicesData = [
    {
      id: 'website-development',
      title: 'Website Development',
      subtitle: 'Subheadings | Project Details',
      image: '/project04.png',
      positionClass: 'services-card-float--1',
    },
    {
      id: 'project-01-a',
      title: 'Project 01',
      subtitle: 'Subheadings | Project Details',
      image: '/project04.png',
      positionClass: 'services-card-float--2',
    },
    {
      id: 'project-01-b',
      title: 'Project 01',
      subtitle: 'Subheadings | Project Details',
      image: '/project04.png',
      positionClass: 'services-card-float--3',
    },
    {
      id: 'project-01-c',
      title: 'Project 01',
      subtitle: 'Subheadings | Project Details',
      image: '/project04.png',
      positionClass: 'services-card-float--4',
    },
  ];

  return (
    <section id="services" className="services-section">
      {/* Background Grid Lines (5 vertical, 2 horizontal) */}
      <div className="services-bg-lines">
        <div className="services-bg-line-v" />
        <div className="services-bg-line-v" />
        <div className="services-bg-line-v" />
        <div className="services-bg-line-v" />
        <div className="services-bg-line-v" />
        <div className="services-bg-line-h" />
        <div className="services-bg-line-h" />
      </div>

      {/* Giant Typography Watermark Text in Background */}
      <div className="services-watermark">DIGITAL</div>

      {/* Centralized Sticky Heading */}
      <h5 className="services-center-heading">Services</h5>

      {/* DESKTOP LAYOUT - Floating Staggered Flow */}
      <div className="services-desktop-grid">
        {/* Left Column (Cards 1 & 3) */}
        <div className="services-column services-column--left">
          {/* Card 1 */}
          <div className="services-card-float">
            <div className="services-card__img-wrap">
              <img
                src={servicesData[0].image}
                alt={servicesData[0].title}
                className="services-card__img"
              />
              <div className="project-card__overlay" />

              <div className="services-card__badge">
                <span className="services-card__badge-text">
                  View More
                  <svg
                    className="services-card__badge-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="10 7 17 7 17 14" />
                  </svg>
                </span>
                <div className="services-card__badge-dot" />
              </div>
            </div>
            <h3 className="services-card__title">{servicesData[0].title}</h3>
            <p className="services-card__subtitle">{servicesData[0].subtitle}</p>
          </div>

          {/* Card 3 */}
          <div className="services-card-float">
            <div className="services-card__img-wrap">
              <img
                src={servicesData[2].image}
                alt={servicesData[2].title}
                className="services-card__img"
              />
              <div className="project-card__overlay" />

              <div className="services-card__badge">
                <span className="services-card__badge-text">
                  View More
                  <svg
                    className="services-card__badge-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="10 7 17 7 17 14" />
                  </svg>
                </span>
                <div className="services-card__badge-dot" />
              </div>
            </div>
            <h3 className="services-card__title">{servicesData[2].title}</h3>
            <p className="services-card__subtitle">{servicesData[2].subtitle}</p>
          </div>
        </div>

        {/* Right Column (Cards 2 & 4) */}
        <div className="services-column services-column--right">
          {/* Card 2 */}
          <div className="services-card-float">
            <div className="services-card__img-wrap">
              <img
                src={servicesData[1].image}
                alt={servicesData[1].title}
                className="services-card__img"
              />
              <div className="project-card__overlay" />

              <div className="services-card__badge">
                <span className="services-card__badge-text">
                  View More
                  <svg
                    className="services-card__badge-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="10 7 17 7 17 14" />
                  </svg>
                </span>
                <div className="services-card__badge-dot" />
              </div>
            </div>
            <h3 className="services-card__title">{servicesData[1].title}</h3>
            <p className="services-card__subtitle">{servicesData[1].subtitle}</p>
          </div>

          {/* Card 4 */}
          <div className="services-card-float">
            <div className="services-card__img-wrap">
              <img
                src={servicesData[3].image}
                alt={servicesData[3].title}
                className="services-card__img"
              />
              <div className="project-card__overlay" />

              <div className="services-card__badge">
                <span className="services-card__badge-text">
                  View More
                  <svg
                    className="services-card__badge-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="10 7 17 7 17 14" />
                  </svg>
                </span>
                <div className="services-card__badge-dot" />
              </div>
            </div>
            <h3 className="services-card__title">{servicesData[3].title}</h3>
            <p className="services-card__subtitle">{servicesData[3].subtitle}</p>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET LAYOUT - Alternating Left/Right Flow */}
      <div className="services-mobile-container">
        {servicesData.map((service, index) => {
          const alignmentClass = index % 2 === 0 ? 'services-mobile-card--left' : 'services-mobile-card--right';
          return (
            <div key={service.id} className={`services-mobile-card ${alignmentClass}`}>
              {/* Card Image and Badge */}
              <div className="services-card__img-wrap relative w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services-card__img w-full h-full object-cover"
                />
                <div className="project-card__overlay" />

                <div className="services-card__badge">
                  <span className="services-card__badge-text">
                    View More
                    <svg
                      className="services-card__badge-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="10 7 17 7 17 14" />
                    </svg>
                  </span>
                  <div className="services-card__badge-dot" />
                </div>
              </div>

              {/* Typography Description */}
              <h3 className="services-card__title">{service.title}</h3>
              <p className="services-card__subtitle">{service.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
