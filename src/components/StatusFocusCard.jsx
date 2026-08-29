import React, { useState, useEffect } from 'react';

const focusList = [
  'AWS & Kubernetes',
  'DevSecOps Pipelines',
  'IaC & Terraform',
  'GitOps & Argo CD',
  'Cloud Architecture',
  'Prometheus & Grafana',
];

const statusList = [
  { label: 'Building', color: 'text-amber-400', dot: 'bg-amber-400' },
  { label: 'Deploying', color: 'text-sky-400', dot: 'bg-sky-400' },
  { label: 'Testing', color: 'text-indigo-400', dot: 'bg-indigo-400' },
  { label: 'Operational', color: 'text-emerald-400', dot: 'bg-emerald-500' },
];

export function StatusFocusCard() {
  const [focusIdx, setFocusIdx] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [focusFade, setFocusFade] = useState(true);
  const [statusFade, setStatusFade] = useState(true);

  useEffect(() => {
    const focusInterval = setInterval(() => {
      setFocusFade(false);
      setTimeout(() => {
        setFocusIdx((prev) => (prev + 1) % focusList.length);
        setFocusFade(true);
      }, 250);
    }, 3600);

    const statusInterval = setInterval(() => {
      setStatusFade(false);
      setTimeout(() => {
        setStatusIdx((prev) => (prev + 1) % statusList.length);
        setStatusFade(true);
      }, 250);
    }, 4800);

    return () => {
      clearInterval(focusInterval);
      clearInterval(statusInterval);
    };
  }, []);

  const currentStatus = statusList[statusIdx];

  return (
    <div className="my-5 w-full border-y border-[var(--line)] divide-y divide-[var(--line)] font-mono text-[12.5px] select-none">
      {/* FOCUS */}
      <div className="flex items-center justify-between py-3.5 px-0.5">
        <span className="uppercase tracking-widest text-[11px] font-semibold text-[var(--soft)]">FOCUS</span>
        <span
          className="text-[var(--fg)] font-medium transition-all duration-300"
          style={{
            opacity: focusFade ? 1 : 0,
            transform: focusFade ? 'translateY(0)' : 'translateY(-4px)',
          }}
        >
          {focusList[focusIdx]}
        </span>
      </div>

      {/* STATUS */}
      <div className="flex items-center justify-between py-3.5 px-0.5">
        <span className="uppercase tracking-widest text-[11px] font-semibold text-[var(--soft)]">STATUS</span>
        <span
          className={`flex items-center gap-2 font-semibold transition-all duration-300 ${currentStatus.color}`}
          style={{
            opacity: statusFade ? 1 : 0,
            transform: statusFade ? 'translateY(0)' : 'translateY(-4px)',
          }}
        >
          <span className="relative flex size-2">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${currentStatus.dot} opacity-75`} />
            <span className={`relative inline-flex size-2 rounded-full ${currentStatus.dot}`} />
          </span>
          {currentStatus.label}
        </span>
      </div>
    </div>
  );
}
