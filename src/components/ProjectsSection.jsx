import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Container } from './Container';
import { AnimatedSection } from './AnimatedSection';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

export function ProjectsSection() {
  return (
    <div id="projects">
      <SectionHeader title="Projects" />

      <Container className="px-6 py-6 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {portfolioData.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <AnimatedSection delay={index * 0.05}>
      <div className="group flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--soft)] hover:shadow-md h-full">
        <div>
          {/* Card Header / Image Area */}
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg border border-[var(--line)] bg-gradient-to-br from-[var(--chip)] via-[var(--card)] to-[var(--bg)]/40 p-3 flex flex-col justify-between">
            <div className="bg-stripes absolute inset-0 opacity-20 pointer-events-none" />

            {/* Camera frame overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 font-mono text-[9px] text-white">
              <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-white/70" />
              <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-white/70" />
              <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-white/70" />
              <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-white/70" />
              <div className="absolute top-2.5 left-7 flex items-center gap-1 text-[8px] font-semibold text-white/80">
                <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" /> REC
              </div>
              <div className="absolute top-2.5 right-7 text-[8px] text-white/80 font-semibold">
                ISO 400
              </div>
            </div>

            {/* Status badges */}
            <div className="relative z-20 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {project.status && (
                  <span className="rounded bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                    • {project.status}
                  </span>
                )}
                {project.featured && (
                  <span className="rounded bg-amber-400/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-amber-500 border border-amber-500/30">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Project title overlay at bottom */}
            <div className="relative z-20 mt-auto">
              <div className="flex items-center gap-2 font-mono text-[9px] text-[var(--soft)] mb-1">
                <FiFolder size={10} />
                <span>{project.categories?.join(' / ')}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl text-[var(--fg)] tracking-tight leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-relaxed text-[var(--muted)] line-clamp-3">
            {project.blurb}
          </p>

          {/* Tech stack tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-[var(--line)] bg-[var(--chip)] px-2 py-0.5 font-mono text-[10px] text-[var(--soft)] transition-colors group-hover:text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card footer with links */}
        <div className="mt-4 flex items-center gap-3 border-t border-[var(--line)] pt-3.5">
          {project.links.source && (
            <a
              href={project.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              <FiGithub size={13} /> Source
            </a>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
