import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { portfolioData } from '../data/portfolioData';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi';

export function Navbar({ onOpenPalette, theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const isDark = theme === 'dark';

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        if (item.id === 'home') {
          if (window.scrollY < 300) {
            setActiveSection('home');
            break;
          }
        } else {
          const el = document.getElementById(item.id);
          if (el && el.offsetTop <= scrollPos) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md">
      <Container className="flex items-center justify-between px-6 py-3 sm:px-8">
        {/* Brand Name */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-serif text-xl tracking-wide text-[var(--fg)] hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent p-0"
        >
          {portfolioData.firstName}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-5 text-[13px] text-[var(--muted)]">
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleNavClick(id)}
                className={`group relative transition-colors hover:text-[var(--fg)] cursor-pointer bg-transparent border-none p-0 ${
                  isActive ? 'text-[var(--fg)] font-semibold' : ''
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 ${
                    isActive ? 'scale-x-100 origin-left' : ''
                  }`}
                />
              </button>
            );
          })}

          {/* Search Icon Button */}
          {onOpenPalette && (
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Search Command Palette"
              title="Open Search (⌘K)"
              className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:text-[var(--fg)] hover:border-[var(--soft)] cursor-pointer"
            >
              <FiSearch className="size-3.5" />
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:rotate-45 hover:text-[var(--fg)] hover:border-[var(--soft)] cursor-pointer"
          >
            {isDark ? <FiSun className="size-3.5" /> : <FiMoon className="size-3.5" />}
          </button>
        </nav>

        {/* Mobile Nav Action Buttons */}
        <div className="flex sm:hidden items-center gap-3">
          {onOpenPalette && (
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Search Command Palette"
              className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
            >
              <FiSearch className="size-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="grid size-8 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] cursor-pointer"
          >
            {isDark ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
          </button>
        </div>
      </Container>
    </header>
  );
}
