import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Container } from './Container';
import { portfolioData } from '../data/portfolioData';
import { FiCloud, FiServer, FiCpu, FiEye, FiGitBranch, FiTerminal } from 'react-icons/fi';

const groupedSkills = [
  {
    category: 'Cloud Services',
    icon: FiCloud,
    skills: ['AWS', 'EC2', 'ECS', 'EKS', 'ECR', 'AWS Lambda', 'API Gateway', 'IAM', 'VPC', 'ALB', 'S3', 'CloudWatch', 'Route53', 'Amazon Polly']
  },
  {
    category: 'DevOps & DevSecOps',
    icon: FiServer,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS CodePipeline', 'AWS CodeBuild', 'Helm', 'Argo CD', 'SonarQube', 'Trivy', 'Docker Scout']
  },
  {
    category: 'Infrastructure & Linux',
    icon: FiCpu,
    skills: ['Terraform', 'Linux', 'Ubuntu', 'Arch Linux', 'Bash', 'Nginx']
  },
  {
    category: 'Monitoring & VCS',
    icon: FiEye,
    skills: ['Prometheus', 'Grafana', 'Git', 'GitHub']
  }
];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Cloud Services', 'DevOps & DevSecOps', 'Infrastructure & Linux', 'Monitoring & VCS'];

  const filteredGroups = activeTab === 'All'
    ? groupedSkills
    : groupedSkills.filter((g) => g.category === activeTab);

  return (
    <div id="skills">
      <SectionHeader title="Tech Stack" />
      <Container className="px-6 py-7 sm:px-8 space-y-6">
        {/* Flat Minimal Filter Tabs - No heavy rounded box */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[var(--line)] pb-3 font-mono text-[12.5px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1.5 transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'text-[var(--fg)] font-semibold'
                  : 'text-[var(--soft)] hover:text-[var(--muted)]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--fg)] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Grouped Skills Matrix - Clean border-divided rows without individual rounded boxes */}
        <div className="divide-y divide-[var(--line)] font-mono text-[13px]">
          {filteredGroups.map((group) => {
            const IconComp = group.icon;
            return (
              <div key={group.category} className="py-4 first:pt-0 last:pb-0 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[var(--soft)] font-semibold">
                  <IconComp size={13} className="text-[var(--muted)]" />
                  <span>{group.category}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[12px] text-[var(--fg)] transition-all duration-200 hover:border-[var(--soft)] hover:bg-[var(--hover)]"
                    >
                      <span className="size-1 rounded-full bg-emerald-500/80" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
