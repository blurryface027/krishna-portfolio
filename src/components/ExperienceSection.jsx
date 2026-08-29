import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Container } from './Container';
import { AnimatedSection } from './AnimatedSection';
import { portfolioData } from '../data/portfolioData';
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

export function ExperienceSection() {
  const edu = portfolioData.education;
  const courseworkList = [
    'Operating Systems',
    'Computer Networks',
    'DBMS',
    'Cloud Computing',
    'Linux Administration',
    'Data Structures & Algorithms'
  ];

  return (
    <div id="education" className="scroll-mt-20 relative">
      <span id="experience" className="absolute -top-20 block" />
      <SectionHeader title="Education" />
      <Container className="px-6 py-7 sm:px-8">
        {edu && (
          <AnimatedSection delay={0}>
            <div className="group relative rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 transition-all duration-300 hover:border-[var(--soft)] hover:bg-[var(--chip)]/70 shadow-sm">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 size-2 border-t border-l border-[var(--soft)] rounded-tl-xl opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="absolute top-0 right-0 size-2 border-t border-r border-[var(--soft)] rounded-tr-xl opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-0 left-0 size-2 border-b border-l border-[var(--soft)] rounded-bl-xl opacity-40 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-0 right-0 size-2 border-b border-r border-[var(--soft)] rounded-br-xl opacity-40 group-hover:opacity-100 transition-opacity" />

              {/* Title & Institution Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-[var(--fg)]">
                      <FiAward size={14} />
                    </span>
                    <h3 className="font-serif text-xl text-[var(--fg)] tracking-wide">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="font-mono text-[13px] font-medium text-[var(--muted)] pl-9">
                    {edu.institution}
                  </p>
                </div>

                {/* Period & Score Pills */}
                <div className="flex sm:flex-col items-end gap-2 shrink-0 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--bg)] px-3 py-1 text-[var(--muted)]">
                    <FiCalendar size={12} className="text-[var(--soft)]" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-400">
                    {edu.cgpa}
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 border-y border-[var(--line)] py-4 font-mono">
                <div className="p-2 text-center border-r border-[var(--line)] last:border-r-0">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--soft)] font-medium">Degree</div>
                  <div className="mt-1 text-[13px] font-semibold text-[var(--fg)]">B.Tech CSE</div>
                </div>
                <div className="p-2 text-center border-r border-[var(--line)] last:border-r-0">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--soft)] font-medium">CGPA</div>
                  <div className="mt-1 text-[13px] font-semibold text-emerald-400">7.0 / 10</div>
                </div>
                <div className="p-2 text-center border-r border-[var(--line)] last:border-r-0">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--soft)] font-medium">Batch</div>
                  <div className="mt-1 text-[13px] font-semibold text-[var(--fg)]">2022 – 2026</div>
                </div>
                <div className="p-2 text-center">
                  <div className="text-[10px] uppercase tracking-wider text-[var(--soft)] font-medium">Location</div>
                  <div className="mt-1 text-[13px] font-semibold text-[var(--fg)] flex items-center justify-center gap-1">
                    <FiMapPin size={11} className="text-[var(--soft)]" />
                    AKTU, UP
                  </div>
                </div>
              </div>

              {/* Relevant Coursework Chip Grid */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-[var(--soft)] font-semibold">
                  <FiBookOpen size={12} />
                  <span>Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11.5px]">
                  {courseworkList.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 text-[var(--muted)] transition-colors duration-200 hover:border-[var(--soft)] hover:text-[var(--fg)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </div>
  );
}
