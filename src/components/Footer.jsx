import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <span className="footer-copy">© {new Date().getFullYear()} Krishna · All rights reserved</span>
      <span className="footer-tag">Designed & Built by <span>Krishna</span></span>
    </footer>
  );
};

export default Footer;
