import React, { useState, useEffect } from 'react';
import { SectionHeader, StripesBar } from './SectionHeader';
import { Container } from './Container';
import { ContactSection } from './ContactSection';
import { portfolioData } from '../data/portfolioData';
import { FiArrowRight } from 'react-icons/fi';

const quotes = [
  { text: "When something is important enough, you do it even if the odds are not in your favor.", author: "Elon Musk" },
  { text: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
  { text: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "I’ve decided to become the Pirate King. If I die trying, then at least I die fighting for my dream.", author: "Monkey D. Luffy" },
  { text: "If you don't like your destiny, don't accept it.", author: "Naruto Uzumaki" },
  { text: "A person grows most when he's able to surpass his limits.", author: "Itachi Uchiha" },
  { text: "Failure is an option here. If things are not failing, you are not innovating enough.", author: "Elon Musk" },
];

export function Footer() {
  const [time, setTime] = useState('');
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  // Time update
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now)
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Quotes rotation with fade effect
  useEffect(() => {
    const id = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setQuoteIdx((prev) => (prev + 1) % quotes.length);
        setFadeState(true);
      }, 400);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const currentQuote = quotes[quoteIdx];

  return (
    <footer className="w-full">
      <StripesBar h="h-12" />
      <SectionHeader title="Scrolled Too Far" />
      
      {/* Scrolled too far CTA */}
      <Container className="px-6 py-10 text-center sm:px-8">
        <p className="text-[14px] text-[var(--muted)]">
          If you've read this far, you might be interested in collaborating or building something great.
        </p>
        <a
          href="mailto:krishna158310@gmail.com"
          className="group mt-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:border-white hover:bg-[var(--chip)] hover:-translate-y-0.5 shadow-sm"
        >
          Let's Talk
          <FiArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </Container>

      {/* Contact links grid right below Scrolled Too Far */}
      <ContactSection />

      <StripesBar className="border-t border-[var(--line)]" />

      {/* Dynamic Animated Quote Section matching reference F2 */}
      <div className="w-full border-y border-[var(--line)]">
        <Container className="px-8 py-12 text-center min-h-[160px] flex flex-col items-center justify-center bg-[var(--bg)] select-none">
          <div className="w-full max-w-[580px] min-h-[140px] flex flex-col items-center justify-center overflow-hidden">
            <div
              className="flex flex-col items-center transition-all duration-500 ease-in-out"
              style={{
                opacity: fadeState ? 1 : 0,
                transform: fadeState ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <span className="font-serif text-4xl text-[var(--soft)] leading-none">“</span>
              <p className="font-serif mx-auto -mt-2 max-w-md text-[20px] sm:text-[22px] italic leading-snug text-[var(--fg)]">
                {currentQuote.text}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--soft)] font-bold">
                — {currentQuote.author}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <StripesBar h="h-5" />

      {/* Bottom copyright footer matching reference */}
      <div className="w-full border-t border-[var(--line)]">
        <Container className="border-b-0 px-6 py-8 text-center sm:px-8">
          <p className="text-[14.5px] text-[var(--muted)]">
            Designed & Developed by <span className="font-semibold text-[var(--fg)]">{portfolioData.name}</span>
          </p>
          <p className="mt-1.5 font-mono text-[12px] text-[var(--soft)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="mt-2.5 flex items-center justify-center gap-2 font-mono text-[12px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {portfolioData.location} · {time} IST
          </p>
        </Container>
      </div>
    </footer>
  );
}
