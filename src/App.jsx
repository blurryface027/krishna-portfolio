import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TechStackSection } from './components/TechStackSection';
import { SidebarIndex } from './components/SidebarIndex';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Sync theme with html root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Cmd/Ctrl + K
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans text-[var(--fg)] antialiased transition-colors duration-300 relative">
      {/* Sticky Top Header Navigation (reference: O2) */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />

      {/* Floating Right Sidebar Index (reference: z2) */}
      <SidebarIndex />

      <main>
        {/* Header with banner + profile info (reference: B2) */}
        <Header onOpenPalette={() => setPaletteOpen(true)} />

        {/* About section (reference: U2) */}
        <AboutSection />

        {/* Projects (reference: nv) */}
        <ProjectsSection isSearchable={false} />

        {/* Tech Stack / Skills (reference: eP) */}
        <TechStackSection />

        {/* Experience / Education (reference: rv) */}
        <ExperienceSection />
      </main>

      {/* Footer (reference: F2) */}
      <Footer />

      {/* Command Palette (reference: oP) */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
    </div>
  );
}
