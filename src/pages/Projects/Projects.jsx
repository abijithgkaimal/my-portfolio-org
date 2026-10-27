import React, { useState, useRef, useEffect } from 'react';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'brynexone',
      title: 'BrynexOne – Lead & Retail Management Ecosystem',
      subtitle: 'Retail Operations System | 2026',
      description: 'A full-stack operations management system designed to sync operations across 25+ retail stores in Kerala.',
      fullDescription: 'A full-stack operations management system designed to sync operations across 25+ retail stores in Kerala. Built to seamlessly connect physical billing systems with real-time web & mobile platforms.',
      image: '/project01.png',
      images: [
        '/brynex/brynex_1.png',
        '/brynex/brynex_2.png',
        '/brynex/brynex_3.png',
        '/brynex/brynex_4.png',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Flutter API Integration', 'Swagger'],
      features: [
        'Designed the entire backend data model workflows and a multi-tiered Role-Based Access Control (RBAC) system.',
        'Developed an automated background sync engine pulling walk-in metrics every 15 minutes, seamlessly linking physical billing systems (bookings, returns) with a React admin panel and a Flutter mobile app.',
      ],
    },
    {
      id: 'telecaller-crm',
      title: 'Telecaller CRM & Automated Lead Platform',
      subtitle: 'High-Throughput Lead Platform | 2026',
      description: 'A high-throughput backend architecture built for a Telecaller CRM platform featuring automated lead synchronization and security.',
      fullDescription: 'A high-throughput backend architecture built for a Telecaller CRM platform featuring automated lead synchronization and security.',
      image: '/project02.png',
      images: [
        '/telecaller_crm/tc_1.png',
        '/telecaller_crm/tc_2.png',
        '/telecaller_crm/tc_3.png',
        '/telecaller_crm/tc_4.jpg',
        '/telecaller_crm/tc_5.jpg',
        '/telecaller_crm/tc_6.jpg',
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Swagger', 'Render'],
      features: [
        'Built secure role-based access control and implemented advanced MongoDB query indexing alongside duplicate detection.',
        'Engineered key operational logic, including a round-robin lead distribution algorithm and automated follow-up notification triggers.',
      ],
    },
    {
      id: 'jewelry-ecommerce',
      title: 'Jewelry E-Commerce & Admin System',
      subtitle: 'Luxury E-Commerce & Admin Control Panel | 2026',
      description: 'A production-ready, full-stack luxury jewelry e-commerce solution featuring a customer shopping experience alongside a powerful administrative control panel.',
      fullDescription: 'A production-ready, full-stack luxury jewelry e-commerce solution featuring a customer shopping experience alongside a powerful administrative control panel.',
      image: '/project03.png',
      images: [
        '/jewel/jewel_1.png',
        '/jewel/jewel_2.png',
        '/jewel/jewel_3.png',
        '/jewel/jewel_4.png',
        '/jewel/jewel_5.png',
        '/jewel/jewel_6.png',
      ],
      technologies: ['Next.js', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'TypeScript', 'AWS (S3, CloudFront, RDS)', 'Tailwind CSS'],
      features: [
        'Architected secure REST APIs with NestJS, Prisma ORM, and PostgreSQL for robust role-based access control (RBAC), user authentication, and transaction safety.',
        'Developed admin management tools for handling dynamic category mapping, purchase orders, automated inventory adjustments, and homepage content curation (New Arrivals & Best Sellers).',
        'Built a modern, responsive Next.js storefront integrated with AWS CloudFront/S3 media delivery to ensure fast load times and high-quality asset rendering.',
      ],
    },
    {
      id: 'zorucci-suitor-guy',
      title: 'Suitor Guy & Zorucci',
      subtitle: 'Bridal & Groom Rental Storefronts | 2025',
      description: 'High-contrast, media-optimized e-commerce brand interfaces for luxury groom rental and bridal wear storefronts.',
      fullDescription: 'High-contrast, media-optimized e-commerce brand interfaces for luxury groom rental and bridal wear storefronts.',
      image: '/project04.png',
      images: [
        '/zorucci_suitor/zs_1.png',
        '/zorucci_suitor/zs_2.png',
        '/zorucci_suitor/zs_3.png',
        '/zorucci_suitor/zs_4.png',
        '/zorucci_suitor/zs_5.png',
        '/zorucci_suitor/zs_6.png',
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      features: [
        'Suitor Guy – Premium Groom Rental Platform: High-contrast, media-optimized e-commerce interface co-developed in a 3-developer team with fluid navigation and minimalist UI components.',
        'Zorucci – Premium Bridal Rental Platform: Responsive web storefront for a luxury bridal wear showcase with crisp asset rendering and client-side load time optimizations.',
      ],
      links: [
        { label: 'Visit Suitor Guy ↗', url: 'https://suitorguy.com/' },
        { label: 'Visit Zorucci ↗', url: 'https://www.zorucci.com/' },
      ],
    },
    {
      id: "rootfin",
      title: "RootFin – Retail ERP & Finance Platform",
      subtitle: "Retail ERP & Finance Platform | 2026",
      description: "A comprehensive retail ERP and financial management platform built for multi-outlet retail chains.",
      fullDescription: "A retail ERP and finance platform built for multi-outlet chains, covering automated Day Book accounting, inventory tracking, and synchronized store closings.",
      image: "/project05.png",
      images: [
        "/rootfin/rootfin_1.png",
        "/rootfin/rootfin_2.png",
        "/rootfin/rootfin_3.png"
      ],
      technologies: [
        "React 19",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
        "AWS EC2"
      ],
      features: [
        "Automated Stock Engines: Real-time inventory tracking for multi-warehouse transfers, physical store adjustments, and automated reorder alerts.",
        "AI-Accelerated Financial Logic: Rapidly scaffolded Day Book closing validations, balance carry-forwards, and in-memory cached reporting.",
        "Role-Guarded 100+ Page SPA: Strict role-level guards, client-side caching, PDF exports, and CI/CD pipelines deploying to AWS EC2."
      ]
    },
    {
      id: "dopamine-couch",
      title: "Dopamine Couch – Mental Health Platform",
      subtitle: "Healthcare & Teletherapy Platform | 2026",
      description: "A responsive, high-performance web platform designed to streamline online therapy consultations, session bookings, and mental wellness management.",
      fullDescription: "A responsive web platform designed to streamline online therapy consultations, session bookings, and mental wellness management.",
      image: "/project06.png",
      images: [
        "/dopc/dopc_1.png",
        "/dopc/dopc_2.png",
        "/dopc/dopc_3.png"
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "Axios",
        "Vite"
      ],
      features: [
        "Accessible User Interface: Clean, modular React views focused on high usability, accessibility, and minimal cognitive load.",
        "AI-Guided UI Optimization: Leveraged AI tools to accelerate component scaffolding and optimize client-side rendering trees.",
        "Seamless API Integration: Connected live RESTful booking workflows and authentication with agile feedback-driven iteration."
      ]
    },
  ];

  const sectionRef = useRef(null);

  const updateStickyTop = () => {
    if (sectionRef.current) {
      const height = sectionRef.current.scrollHeight || sectionRef.current.offsetHeight;
      const topOffset = Math.min(0, window.innerHeight - height);
      sectionRef.current.style.setProperty('--projects-sticky-top', `${topOffset}px`);
    }
  };

  useEffect(() => {
    updateStickyTop();

    const ro = new ResizeObserver(() => {
      updateStickyTop();
    });
    if (sectionRef.current) {
      ro.observe(sectionRef.current);
    }

    window.addEventListener('resize', updateStickyTop);
    window.addEventListener('load', updateStickyTop);

    // Multiple staggered timers for async image rendering
    const t1 = setTimeout(updateStickyTop, 200);
    const t2 = setTimeout(updateStickyTop, 800);
    const t3 = setTimeout(updateStickyTop, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      ro.disconnect();
      window.removeEventListener('resize', updateStickyTop);
      window.removeEventListener('load', updateStickyTop);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <h2 className="projects-heading">Projects</h2>

        {/* 2x2 Grid System */}
        <div className="grid grid-cols-1 gap-y-14 gap-x-8 lg:grid-cols-2 lg:gap-y-20 lg:gap-x-32">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              title={project.description}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Image Block */}
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  onLoad={updateStickyTop}
                />
                <div className="project-card__overlay" />

                {/* View More Badge Overlay (fades in on hover) */}
                <div className="project-card__badge">
                  <span className="project-card__badge-text">
                    View More
                    <svg
                      className="project-card__badge-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="10 7 17 7 17 14"></polyline>
                    </svg>
                  </span>
                  <div className="project-card__badge-dot" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__subtitle">{project.subtitle}</p>
              <p className="project-card__description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Project Slider Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
