import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hej, jag heter <span className="highlight">Gustav</span></h1>
        <p className="hero-subtitle">Javautvecklare med passion för molntjänster och modern webbutveckling</p>
        <p className="hero-description">
          Jag är student på Stockholms Tekniska Universitet och specialiserar mig på Java-utveckling och Azure molntjänster. 
          Detta portfolio är byggt med React och deployat i Azure för att visa mina kunskaper i både 
          frontend-utveckling och cloud computing.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Se mina projekt</a>
          <a href="#contact" className="btn btn-secondary">Kontakta mig</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;