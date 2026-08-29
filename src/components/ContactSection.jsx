import React from 'react';
import { Container } from './Container';
import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiArrowUpRight } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const contactLinks = [
  { label: 'GitHub', href: portfolioData.socials.github, Icon: FiGithub },
  { label: 'LinkedIn', href: portfolioData.socials.linkedin, Icon: FiLinkedin },
  { label: 'Twitter', href: portfolioData.socials.twitter, Icon: FaXTwitter },
  { label: 'Mail', href: portfolioData.socials.email, Icon: FiMail },
  { label: 'Resume', href: portfolioData.socials.resume, Icon: FiFileText },
];

export function ContactSection() {
  return (
    <div id="contact" className="w-full border-t border-[var(--line)] scroll-mt-20">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-[var(--line)] sm:border-b-0">
          {contactLinks.map((link, i) => {
            const IconComp = link.Icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2.5 border-b border-r border-[var(--line)] px-4 py-3.5 text-[12px] font-medium transition-colors duration-200 hover:bg-[var(--hover)] ${
                  i % 2 === 1 ? 'border-r-0 sm:border-r' : ''
                } ${i >= 4 ? 'border-b-0' : ''} sm:border-b-0 sm:last:border-r-0 ${
                  i === 4 ? 'col-span-2 border-r-0 sm:col-span-1 sm:border-r' : ''
                }`}
              >
                <span className="grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                  <IconComp className="size-4" />
                </span>
                <span className="text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                  {link.label}
                </span>
                <FiArrowUpRight className="size-3.5 text-[var(--soft)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--fg)]" />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
