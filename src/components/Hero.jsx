import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowRight,
  FaXTwitter
} from 'react-icons/fa6';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge-wrap reveal">
          <span className="badge">
            <span className="pulse-dot"></span> Available for work · DevOps & Cloud
          </span>
        </div>

        {/* Main Reference-Style Large Name Heading */}
        <h1 className="hero-title reveal">
          <span>Krishna</span>
          <span className="hero-handle">(@blurryface027)</span>
        </h1>

        {/* Hero Role & Tagline */}
        <p className="hero-subtitle reveal">
          DevOps & Cloud Engineer architecting <span className="highlight">cloud-native infrastructure</span>, 
          building robust <span className="highlight">CI/CD pipelines</span>, and shipping 
          <span className="highlight"> 99.9% uptime</span> reliability.
        </p>

        {/* Social / Direct Action Links Grid (Reference style pill buttons) */}
        <div className="hero-links-grid reveal">
          <a
            href="https://github.com/blurryface027"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-pill"
          >
            <FaGithub /> github
          </a>
          <a
            href="https://linkedin.com/in/blurryface027"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-pill"
          >
            <FaLinkedin /> linkedin
          </a>
          <a
            href="https://x.com/blurryface027"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-pill"
          >
            <FaXTwitter /> twitter/x
          </a>
          <a href="mailto:hello@kopscloud.in" className="hero-link-pill">
            <FaEnvelope /> email
          </a>
          <a
            href="https://drive.google.com/file/d/1EQ8k7yxcEh7hEl7hv9h_Sb8g2F1dSA8Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-pill hero-link-accent"
          >
            <FaFileDownload /> resume
          </a>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="hero-cta-group reveal">
          <a href="#projects" className="btn btn-emerald">
            View Shipped Projects <FaArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
