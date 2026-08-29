import React from 'react';
import { Container } from './Container';

export function SectionHeader({ title, aside, id }) {
  return (
    <div id={id} className="relative w-full border-y border-[var(--line)] bg-stripes scroll-mt-20">
      {/* Corner dots */}
      <span className="absolute top-0 left-0 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 bg-[var(--fg)] opacity-40 z-20" />
      <span className="absolute top-0 right-0 h-[3px] w-[3px] translate-x-1/2 -translate-y-1/2 bg-[var(--fg)] opacity-40 z-20" />
      <span className="absolute bottom-0 left-0 h-[3px] w-[3px] -translate-x-1/2 translate-y-1/2 bg-[var(--fg)] opacity-40 z-20" />
      <span className="absolute bottom-0 right-0 h-[3px] w-[3px] translate-x-1/2 translate-y-1/2 bg-[var(--fg)] opacity-40 z-20" />
      <Container className="flex items-center justify-between gap-4 bg-[var(--bg)] px-6 py-3 sm:px-8">
        <h2 className="font-serif text-2xl tracking-wide text-[var(--fg)]">
          {title}
        </h2>
        {aside}
      </Container>
    </div>
  );
}

export function StripesBar({ h = 'h-7', className = '' }) {
  return (
    <div className={`relative w-full bg-stripes ${h} ${className}`}>
      <Container className="h-full" />
    </div>
  );
}
