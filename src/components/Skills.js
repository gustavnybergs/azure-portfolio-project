import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "Spring Security", "Node.js", "REST API"]
    },
    {
      category: "Databaser",
      skills: ["PostgreSQL", "H2", "MySQL"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Azure (pågående)", "Docker", "Vercel", "GitHub Actions"]
    },
    {
      category: "Verktyg",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]
    },
    {
      category: "Metodik",
      skills: ["Agil utveckling", "Scrum", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Tekniska Färdigheter</h2>
        <p className="section-subtitle">Teknologier och verktyg jag arbetar med</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;