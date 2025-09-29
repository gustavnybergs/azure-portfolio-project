import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Azure Portfolio",
      description: "Ett modernt portfolio byggt med React och deployat i Azure Static Web Apps. Visar kunskaper i molntjänster och CI/CD.",
      tech: ["React", "Azure", "GitHub Actions"],
      github: "https://github.com/ditt-username/azure-portfolio",
      demo: "#"
    },
    {
      title: "Secure Spring App",
      description: "En säker Java-applikation byggd med Spring Boot med fokus på autentisering och säkerhet.",
      tech: ["Java", "Spring Boot", "Spring Security"],
      github: "https://github.com/gustavnybergs/SecureSpringApp",
      demo: null
    },
    {
      title: "Agil Fullstack Applikation",
      description: "En fullstack applikation utvecklad i agilt team med modern tech stack och deployment på Vercel.",
      tech: ["React", "Node.js", "Vercel"],
      github: "https://github.com/Elie0825/Grupp-5-Agila-projektet-",
      demo: "https://grupp-5-agila-projektet.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mina Projekt</h2>
        <p className="section-subtitle">Här är några projekt jag arbetat med</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>📁</span> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>🚀</span> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;