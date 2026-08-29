import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { portfolioData, rotatingTitles } from '../data/portfolioData';
import { FiMapPin, FiSearch, FiRefreshCw } from 'react-icons/fi';

export function Header({ onOpenPalette }) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Profile image switcher state
  const [pfpIdx, setPfpIdx] = useState(0);
  const [pfpFade, setPfpFade] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleNextPfp = (e) => {
    if (e) e.stopPropagation();
    setIsSpinning(true);
    setPfpFade(false);
    setTimeout(() => {
      setPfpIdx((prev) => (prev + 1) % portfolioData.profileImages.length);
      setPfpFade(true);
      setTimeout(() => setIsSpinning(false), 300);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTitleIdx((prev) => (prev + 1) % rotatingTitles.length);
        setIsAnimating(false);
      }, 300);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Banner Image */}
      <Container className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="relative h-36 overflow-hidden rounded-xl bg-neutral-950 sm:h-44 border border-[var(--line)]">
          <img
            src={portfolioData.bannerImage}
            alt="Banner Cover"
            loading="eager"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            className="w-full h-full object-cover object-center opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
          {/* Horizontal scan lines overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 5px)'
          }} />
          {/* Vertical lines overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.12) 0, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 28px)'
          }} />
        </div>
      </Container>

      {/* Profile Info Row */}
      <Container className="px-6 py-6 sm:px-8">
        <div
          className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-6 justify-between"
          style={{ opacity: 1 }}
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-5">
            {/* Profile Image Container with Reload Button */}
            <div
              onClick={handleNextPfp}
              className="relative grid size-[86px] shrink-0 place-items-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)] shadow-md group cursor-pointer select-none"
              title="Click to switch profile avatar"
            >
              <img
                src={portfolioData.profileImages[pfpIdx]}
                alt={portfolioData.name}
                loading="eager"
                className={`h-full w-full object-cover pointer-events-none transition-opacity duration-300 ${
                  pfpFade ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Scanline overlay on image */}
              <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden opacity-[0.18] group-hover:opacity-30 transition-opacity"
                style={{
                  background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)',
                  backgroundSize: '100% 4px'
                }}
              />

              {/* Small reload button overlaid on bottom-right of avatar */}
              <button
                onClick={handleNextPfp}
                title="Switch Avatar"
                className="absolute bottom-1 right-1 z-20 flex size-6 items-center justify-center rounded-lg border border-white/20 bg-black/85 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-white hover:bg-black active:scale-95 cursor-pointer"
              >
                <FiRefreshCw className={`size-3 transition-transform duration-500 ${isSpinning ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Name + Rotating Title + Location - Vertically bounded & aligned to 86px */}
            <div className="flex flex-col justify-between h-[86px] py-0.5">
              <h1 className="font-serif text-3xl sm:text-[34px] leading-none tracking-tight text-[var(--fg)]">
                {portfolioData.name}
              </h1>

              {/* Rotating subtitle */}
              <div className="h-[18px] overflow-hidden my-auto">
                <p
                  className="font-mono text-[13px] text-[var(--muted)] transition-all duration-300 leading-tight"
                  style={{
                    transform: isAnimating ? 'translateY(-12px)' : 'translateY(0)',
                    opacity: isAnimating ? 0 : 1,
                  }}
                >
                  {rotatingTitles[titleIdx]}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center sm:justify-start gap-1.5 font-mono text-[11px] text-[var(--soft)] leading-none">
                <FiMapPin className="size-3 text-[var(--soft)]" />
                <span>{portfolioData.location}</span>
              </div>
            </div>
          </div>

          {/* Command palette search trigger */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--chip)] px-3 py-1.5 font-mono text-[11px] text-[var(--muted)] hover:border-[var(--soft)] hover:text-[var(--fg)] transition-all cursor-pointer shadow-sm"
            >
              <FiSearch size={13} />
              <span>Search</span>
              <kbd className="rounded border border-[var(--line)] bg-[var(--bg)] px-1.5 py-0.5 text-[10px] text-[var(--soft)]">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
