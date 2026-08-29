import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiCopy, FiCheck, FiFolder, FiBookOpen, FiExternalLink, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (isOpen && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => { setCopied(false); onClose(); }, 1000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id) || (id === 'education' || id === 'experience' ? document.getElementById('education') || document.getElementById('experience') : null);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const items = [
    { id: 'nav-about', category: 'Navigation', title: 'Go to About', icon: <FiFolder size={16} />, action: () => scrollTo('about') },
    { id: 'nav-projects', category: 'Navigation', title: 'Go to Projects', icon: <FiFolder size={16} />, action: () => scrollTo('projects') },
    { id: 'nav-skills', category: 'Navigation', title: 'Go to Tech Stack', icon: <FiFolder size={16} />, action: () => scrollTo('skills') },
    { id: 'nav-edu', category: 'Navigation', title: 'Go to Education', icon: <FiFolder size={16} />, action: () => scrollTo('education') },
    { id: 'nav-contact', category: 'Navigation', title: 'Go to Contact', icon: <FiFolder size={16} />, action: () => scrollTo('contact') },
    ...portfolioData.projects.map((p) => ({
      id: `proj-${p.title}`, category: 'Projects', title: `View ${p.title}`, subtitle: p.blurb,
      icon: <FiFolder size={16} />, action: () => scrollTo('projects'),
    })),
    { id: 'social-github', category: 'Socials', title: 'Open GitHub', icon: <FiExternalLink size={16} />,
      action: () => { window.open(portfolioData.socials.github, '_blank'); onClose(); }},
    { id: 'social-linkedin', category: 'Socials', title: 'Open LinkedIn', icon: <FiExternalLink size={16} />,
      action: () => { window.open(portfolioData.socials.linkedin, '_blank'); onClose(); }},
    { id: 'copy-email', category: 'Actions', title: copied ? 'Copied!' : 'Copy Email',
      icon: copied ? <FiCheck size={16} className="text-emerald-400" /> : <FiCopy size={16} />,
      action: handleCopyEmail },
  ];

  const filtered = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return item.title.toLowerCase().includes(q) || item.subtitle?.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
  });

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex((p) => (p + 1) % filtered.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex((p) => (p - 1 + filtered.length) % filtered.length); }
    else if (e.key === 'Enter') { e.preventDefault(); filtered[selectedIndex]?.action(); }
  };

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" style={{ animation: 'fade-up 0.15s ease-out' }} />

      {/* Modal */}
      <div className="relative flex items-start justify-center pt-[15vh] px-4">
        <div
          className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)]/95 shadow-2xl backdrop-blur-xl max-h-[60vh] z-10"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'fade-up 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Search */}
          <div className="flex items-center gap-3 border-b border-[var(--line)] px-4 py-3">
            <FiSearch className="size-4 text-[var(--soft)] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or search..."
              className="w-full bg-transparent text-sm text-[var(--fg)] placeholder:text-[var(--soft)] outline-none border-none"
            />
            <kbd className="hidden sm:inline-block rounded-md border border-[var(--line)] bg-[var(--chip)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--soft)]">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="onyx-scroll overflow-y-auto p-2 max-h-[45vh]">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-xs font-mono text-[var(--soft)]">No results for "{query}"</div>
            ) : (
              Object.entries(
                filtered.reduce((groups, item) => {
                  (groups[item.category] ||= []).push(item);
                  return groups;
                }, {})
              ).map(([category, items]) => (
                <div key={category}>
                  <div className="px-3 pt-3 pb-1 font-mono text-[10px] uppercase tracking-widest text-[var(--soft)]">{category}</div>
                  {items.map((item) => {
                    const globalIdx = filtered.indexOf(item);
                    const isSelected = globalIdx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(globalIdx)}
                        className={`flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 text-left w-full transition-all duration-150 border cursor-pointer ${
                          isSelected
                            ? 'border-[var(--soft)] bg-[var(--chip)] text-[var(--fg)]'
                            : 'border-transparent text-[var(--muted)] hover:bg-[var(--hover)]'
                        }`}
                      >
                        <div className="text-[var(--soft)] shrink-0">{item.icon}</div>
                        <div className="flex-1 overflow-hidden">
                          <div className="text-[13px] font-medium">{item.title}</div>
                          {item.subtitle && (
                            <div className="text-[11px] text-[var(--soft)] truncate">{item.subtitle}</div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 font-mono text-[9px] text-[var(--soft)]">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
            </div>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
