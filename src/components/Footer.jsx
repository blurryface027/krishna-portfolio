import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-pulse"></span> K/OpsCloud
            </a>
            <p className="footer-bio">
              DevOps & Cloud Engineer. Architecting automated, reliable, and scalable infrastructure.
            </p>
            <span className="location-badge">Based in India 🇮🇳</span>
          </div>

          <div className="footer-links-group">
            <div className="footer-nav-col">
              <span className="footer-nav-title">Navigation</span>
              <ul className="footer-nav-list">
                <li><a href="#about">whoami<span className="nav-dot">.</span></a></li>
                <li><a href="#projects">shipped<span className="nav-dot">.</span></a></li>
                <li><a href="#skills">toolchain<span className="nav-dot">.</span></a></li>
                {/* <li><a href="#experience">timeline<span className="nav-dot">.</span></a></li> */}
                <li><a href="#contact">contact<span className="nav-dot">.</span></a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-title">Connect</span>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://github.com/blurryface027" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/blurryface027" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/blurryface027" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter /> Twitter/X
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@kopscloud.in">
                    <FaEnvelope /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright-text">
            © {currentYear} Krishna · All rights reserved.
          </span>
          <span className="built-with">
            Designed & Engineered with precision
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
