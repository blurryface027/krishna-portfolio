import React from 'react';
import { FaBriefcase, FaCalendarCheck, FaLocationDot } from 'react-icons/fa6';
import './Experience.css';

const experienceData = [
  {
    period: '2023 — PRESENT',
    role: 'Cloud & DevOps Engineer',
    company: 'DevOps & Infrastructure Practice',
    location: 'India',
    highlights: [
      'Architected containerized applications using Docker and orchestrated deployments on Kubernetes (EKS/ECS)',
      'Constructed automated CI/CD pipelines handling end-to-end testing, building, and zero-downtime deployment',
      'Optimized cloud resource utilization on AWS, implementing auto-scaling policies and cost-efficient architectures',
      'Integrated security vulnerability scanning (Trivy, SonarQube) and secrets management into developer workflows'
    ]
  },
  {
    period: '2021 — 2023',
    role: 'Infrastructure Automation Developer',
    company: 'Cloud Native Projects',
    location: 'India',
    highlights: [
      'Wrote modular Infrastructure as Code (IaC) templates in Terraform to provision multi-service AWS environments',
      'Automated server configuration and package management using Ansible playbooks and Bash scripts',
      'Implemented real-time monitoring and alerting stacks using Prometheus, Grafana, and AWS CloudWatch'
    ]
  },
  {
    period: '2020 — 2021',
    role: 'Cloud Infrastructure Intern',
    company: 'Infrastructure Learning & Labs',
    location: 'India',
    highlights: [
      'Assisted in migrating legacy workloads to AWS EC2 and S3 infrastructure',
      'Created custom automation scripts for backup routines, log rotation, and system health checks'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Reference Section Heading: `timeline.` */}
        <div className="section-header reveal">
          <h2 className="section-dot-title">
            timeline<span className="dot">.</span>
          </h2>
          <p className="section-subtitle">
            My career path, hands-on projects, and technical milestones in DevOps & Cloud engineering.
          </p>
        </div>

        <div className="timeline-container">
          {experienceData.map((item, index) => (
            <div key={item.period} className="timeline-item reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              {/* Timeline Dot Node */}
              <div className="timeline-marker">
                <span className="marker-dot"></span>
              </div>

              {/* Timeline Card Content */}
              <div className="bento-card timeline-card">
                <div className="timeline-card-header">
                  <div className="period-badge">
                    <FaCalendarCheck /> {item.period}
                  </div>
                  <div className="company-badge">
                    <FaBriefcase /> {item.company}
                  </div>
                </div>

                <h3 className="exp-role-title">{item.role}</h3>

                <ul className="exp-list">
                  {item.highlights.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
