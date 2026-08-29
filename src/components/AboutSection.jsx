import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Container } from './Container';
import { AnimatedSection } from './AnimatedSection';
import { StatusFocusCard } from './StatusFocusCard';
import { portfolioData } from '../data/portfolioData';

export function AboutSection() {
  return (
    <div id="about" className="scroll-mt-20">
      <SectionHeader title="About" />
      <Container className="px-6 py-7 sm:px-8 space-y-4">
        {portfolioData.about.map((text, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1}>
            <div className="flex gap-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[var(--muted)]">
              <span className="text-[var(--soft)] font-mono">•</span>
              <p>{text}</p>
            </div>
          </AnimatedSection>
        ))}

        {/* Dynamic Location, Focus, and Status Metadata Table */}
        <AnimatedSection delay={0.25}>
          <StatusFocusCard />
        </AnimatedSection>

        {/* Developer Snapshot card */}
        <AnimatedSection delay={0.35}>
          <div className="mt-4 rounded-xl border border-[var(--line)] bg-[var(--card)] p-5">
            <p className="font-mono text-[10.5px] uppercase tracking-widest text-[var(--fg)] font-semibold mb-3">
              Developer Snapshot
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-mono text-[var(--muted)]">
              {portfolioData.tldr.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
