import React, { useState, useEffect } from 'react';

const indexItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function SidebarIndex() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = indexItems.length - 1; i >= 0; i--) {
        const item = indexItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed top-[26vh] left-[calc(50%+410px)] pointer-events-auto hidden xl:flex flex-col gap-3.5 z-30 select-none">
      <h3 className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--soft)] uppercase mb-1">
        INDEX
      </h3>
      {indexItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`group flex items-center gap-2.5 font-mono text-[12px] font-medium tracking-[0.05em] transition-all duration-300 ${
              isActive
                ? 'text-[var(--fg)] font-semibold'
                : 'text-[var(--muted)] hover:text-[var(--fg)]'
            }`}
          >
            <span
              className={`h-px bg-current transition-all duration-300 ${
                isActive ? 'w-3' : 'w-0'
              }`}
            />
            {item.label}
          </a>
        );
      })}
    </aside>
  );
}
