import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-eyebrow">Available for work · DevOps Engineer</div>
      <h1 className="hero-name">
        <span>Krishna</span>
      </h1>
      <p className="hero-role">
        Automating <span className="highlight">infrastructure</span>, shipping <span className="highlight">reliability</span>
      </p>
      <p className="hero-desc">
        I architect and maintain cloud-native infrastructure, build robust CI/CD pipelines, and help teams ship faster with fewer failures. Passionate about observability, security, and automation-first culture.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-outline">Get In Touch</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-num">3+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat">
          <span className="stat-num">12+</span>
          <span className="stat-label">Projects Shipped</span>
        </div>
        <div className="stat">
          <span className="stat-num">99.9%</span>
          <span className="stat-label">Uptime Goal</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
