import React, { useEffect, useState } from 'react';
import { FaBars, FaXmark, FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section highlight logic
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="nav-logo" onClick={closeMenu} aria-label="Krishna Portfolio Home">
          <span className="logo-pulse"></span>
          <span className="logo-text">K/OpsCloud</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                whoami<span className="nav-dot">.</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                shipped<span className="nav-dot">.</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              >
                toolchain<span className="nav-dot">.</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#experience"
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              >
                timeline<span className="nav-dot">.</span>
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                contact<span className="nav-dot">.</span>
              </a>
            </li>
          </ul>

          <a
            href="https://github.com/blurryface027"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pill github-nav-btn"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <FaGithub /> GitHub <FaArrowUpRightFromSquare className="external-icon" />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}>
          <ul className="mobile-nav-list">
            <li>
              <a href="#about" onClick={closeMenu}>
                whoami<span className="nav-dot">.</span>
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                shipped<span className="nav-dot">.</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                toolchain<span className="nav-dot">.</span>
              </a>
            </li>
            {/* <li>
              <a href="#experience" onClick={closeMenu}>
                timeline<span className="nav-dot">.</span>
              </a>
            </li> */}
            <li>
              <a href="#contact" onClick={closeMenu}>
                contact<span className="nav-dot">.</span>
              </a>
            </li>
            <li className="mobile-btn-wrap">
              <a
                href="https://github.com/blurryface027"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald"
                onClick={closeMenu}
              >
                <FaGithub /> GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
