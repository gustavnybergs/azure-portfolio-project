import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Kontakta Mig</h2>
        <p className="section-subtitle">Intresserad av att samarbeta? Hör av dig!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <a href="mailto:gustavnybergs@gmail.com">gustavnybergs@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/gustav-nyberg-310958382/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/gustav-nyberg
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/gustavnybergs" target="_blank" rel="noopener noreferrer">
                  github.com/gustavnybergs
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-message">
            <p>
              Jag är för närvarande student på Stockholms Tekniska Institut och läser till Javautvecklare. 
              Jag söker LIA-platser och är öppen för samarbeten och projekt. 
              Tveka inte att höra av dig!
            </p>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2025 Gustav Nyberg. Byggt med React och deployat i Azure.</p>
      </footer>
    </section>
  );
}

export default Contact; 