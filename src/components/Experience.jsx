import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-inner">
        <div className="section-label reveal">Career Path</div>
        <h2 className="section-title reveal">Where I've<br/>shipped things</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="exp-meta">
              <span className="exp-period">2023 — Present</span>
              <span className="exp-company">Acme Corp · Full-time</span>
            </div>
            <div className="exp-role">Senior DevOps Engineer</div>
            <ul className="exp-desc">
              <li>Led migration of 30+ services from bare metal to Kubernetes on AWS EKS</li>
              <li>Built and maintained CI/CD pipelines handling 200+ deployments per week</li>
              <li>Reduced infrastructure costs by 35% through rightsizing and spot instance strategies</li>
              <li>Implemented SOC2-compliant security policies and secrets management with Vault</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="exp-meta">
              <span className="exp-period">2021 — 2023</span>
              <span className="exp-company">TechStart Inc · Full-time</span>
            </div>
            <div className="exp-role">DevOps Engineer</div>
            <ul className="exp-desc">
              <li>Designed and automated infrastructure provisioning using Terraform for multi-region deployments</li>
              <li>Built internal developer portal reducing environment setup time from days to minutes</li>
              <li>Established on-call runbooks and incident response processes</li>
            </ul>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="exp-meta">
              <span className="exp-period">2020 — 2021</span>
              <span className="exp-company">DevSolutions · Internship</span>
            </div>
            <div className="exp-role">Cloud Infrastructure Intern</div>
            <ul className="exp-desc">
              <li>Assisted in migrating on-premise workloads to AWS, supporting 4 production services</li>
              <li>Wrote automation scripts in Bash and Python for routine operational tasks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
