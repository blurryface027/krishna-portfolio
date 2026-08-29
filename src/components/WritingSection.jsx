import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Container } from './Container';
import { AnimatedSection } from './AnimatedSection';
import { portfolioData } from '../data/portfolioData';
import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';

export function WritingSection({ limit }) {
  if (!portfolioData.writing || portfolioData.writing.length === 0) return null;

  const articles = limit ? portfolioData.writing.slice(0, limit) : portfolioData.writing;

  return (
    <div id="writing">
      <SectionHeader
        title="Writing"
        aside={
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--soft)]">
            <FiBookOpen className="size-3.5" />
            <span className="hidden sm:inline">Technical Architecture Notes</span>
          </span>
        }
      />
      <Container>
        <div className="divide-y divide-[var(--line)]">
          {articles.map((article, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 px-6 py-5 sm:px-8 hover:bg-[var(--hover)] transition-colors duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 max-w-2xl">
                  <h3 className="text-[14px] font-medium text-[var(--fg)] group-hover:text-white transition-colors flex items-center gap-1.5">
                    <span>{article.title}</span>
                    <FiArrowUpRight className="size-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--soft)]" />
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-[var(--soft)]">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readingTime}</span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  );
}
