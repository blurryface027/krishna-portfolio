import React, { useMemo } from 'react';
import { SectionHeader } from './SectionHeader';
import { Container } from './Container';
import { portfolioData } from '../data/portfolioData';
import { FiExternalLink } from 'react-icons/fi';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const LEVELS = [0.07, 0.25, 0.45, 0.7, 1.0];

function generateContributions(username) {
  // Generate a deterministic pseudo-random grid based on username
  let hash = 5381;
  for (let i = 0; i < username.length; i++) {
    hash = (hash * 33) ^ username.charCodeAt(i);
  }
  const cells = [];
  let seed = hash >>> 0;
  for (let i = 0; i < 371; i++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const val = seed % 100;
    cells.push(val < 34 ? 0 : val < 60 ? 1 : val < 80 ? 2 : val < 93 ? 3 : 4);
  }
  const total = cells.reduce((sum, c) => sum + (c || 0) * 2, 0);
  return { cells, total };
}

export function GithubSection() {
  const username = portfolioData.github.username;
  const { cells, total } = useMemo(() => generateContributions(username), [username]);

  const monthLabels = useMemo(() => {
    const now = new Date();
    return Array.from({ length: 12 }, (_, i) => MONTHS[(now.getMonth() + 1 + i) % 12]);
  }, []);

  return (
    <div id="github">
      <SectionHeader
        title="GitHub Activity"
        aside={
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
          >
            <span>@{username}</span>
            <FiExternalLink size={12} />
          </a>
        }
      />
      <Container className="px-6 py-6 sm:px-8">
        <div className="onyx-scroll overflow-x-auto pb-2">
          <div className="min-w-[640px]">
            {/* Month labels */}
            <div className="mb-1.5 flex justify-between pr-8 font-mono text-[10px] text-[var(--soft)]">
              {monthLabels.map((m, i) => (
                <span key={m + i}>{m}</span>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {cells.map((level, i) => (
                <span
                  key={i}
                  className="size-[10px] rounded-[2px] bg-[var(--fg)] transition-transform duration-150 hover:scale-125"
                  style={{ opacity: LEVELS[level] }}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="mt-2.5 flex items-center justify-between font-mono text-[11px] text-[var(--soft)]">
              <span>{total.toLocaleString()} contributions in the last year</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                {LEVELS.map((op, i) => (
                  <span
                    key={i}
                    className="size-[9px] rounded-[2px] bg-[var(--fg)]"
                    style={{ opacity: op }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
