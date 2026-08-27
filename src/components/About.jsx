import React, { useState } from 'react';
import { FaCopy, FaCheck, FaTerminal, FaCodeBranch, FaCircleCheck, FaChartLine } from 'react-icons/fa6';
import './About.css';

const About = () => {
  const [copied, setCopied] = useState(false);

  const jsonSnippet = `{
  "name": "Krishna",
  "handle": "blurryface027",
  "role": "DevOps & Cloud Engineer",
  "contact": "hello@kopscloud.in",
  "location": "India",
  "profiles": [
    "github/blurryface027",
    "linkedin/blurryface027",
    "x/blurryface027"
  ],
  "philosophy": "infrastructure-as-code",
  "tools_shipped": 3,
  "uptime_goal": "99.9%"
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Heading matching reference `whoami.` */}
        <div className="section-header reveal">
          <h2 className="section-dot-title">
            whoami<span className="dot">.</span>
          </h2>
          <p className="section-subtitle">
            The engineer behind automated infrastructure, containerization, and cloud reliability.
          </p>
        </div>

        <div className="about-content-grid">
          {/* Left Column: Narrative Bio */}
          <div className="about-bio reveal">
            <p>
              Hi, I'm <strong>Krishna</strong> — a DevOps and Cloud Engineer who thrives at the intersection of infrastructure, developer experience, and system reliability.
            </p>
            <p>
              I believe infrastructure should be <strong>code</strong>, deployments should be <strong>boring and predictable</strong>, and on-call alerts should be <strong>rare</strong>.
            </p>
            <p>
              My focus is on designing scalable cloud architectures on AWS, containerizing workloads with Docker & Kubernetes, provisioning infrastructure declaratively with Terraform, and automating end-to-end CI/CD pipelines.
            </p>
            <p>
              When I'm not tuning Kubernetes manifests or writing Ansible playbooks, I'm exploring new tools in the cloud-native ecosystem and learning modern platform engineering practices.
            </p>
          </div>

          {/* Right Column: Terminal JSON Block (Reference Style) */}
          <div className="about-terminal-wrap reveal">
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="term-dot red"></span>
                  <span className="term-dot yellow"></span>
                  <span className="term-dot green"></span>
                </div>
                <div className="terminal-title">
                  <FaTerminal className="term-icon" /> krishna.json
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopy}
                  title="Copy JSON snippet"
                  aria-label="Copy JSON code"
                >
                  {copied ? <><FaCheck /> Copied</> : <><FaCopy /> Copy</>}
                </button>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="j-brace">&#123;</span>{'\n'}
                    {'  '}<span className="j-key">"name"</span>: <span className="j-str">"Krishna"</span>,{'\n'}
                    {'  '}<span className="j-key">"handle"</span>: <span className="j-str">"blurryface027"</span>,{'\n'}
                    {'  '}<span className="j-key">"role"</span>: <span className="j-str">"DevOps & Cloud Engineer"</span>,{'\n'}
                    {'  '}<span className="j-key">"contact"</span>: <span className="j-str">"hello@kopscloud.in"</span>,{'\n'}
                    {'  '}<span className="j-key">"location"</span>: <span className="j-str">"India"</span>,{'\n'}
                    {'  '}<span className="j-key">"profiles"</span>: [<span className="j-str">"github/blurryface027"</span>, <span className="j-str">"linkedin/blurryface027"</span>],{'\n'}
                    {'  '}<span className="j-key">"philosophy"</span>: <span className="j-str">"infrastructure-as-code"</span>,{'\n'}
                    {'  '}<span className="j-key">"tools_shipped"</span>: <span className="j-num">3</span>,{'\n'}
                    {'  '}<span className="j-key">"uptime_goal"</span>: <span className="j-str">"99.9%"</span>{'\n'}
                    <span className="j-brace">&#125;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles Grid (Matching reference site cards) */}
        <div className="principles-grid">
          <div className="bento-card principle-card reveal">
            <div className="principle-num">01</div>
            <h3 className="principle-title"><FaCodeBranch className="p-icon" /> Infrastructure as Code</h3>
            <p className="principle-desc">
              If it can be provisioned manually, it can be defined in Terraform or Ansible. No snowflake servers or mysterious manual configuration drift.
            </p>
          </div>

          <div className="bento-card principle-card reveal">
            <div className="principle-num">02</div>
            <h3 className="principle-title"><FaCircleCheck className="p-icon" /> Automated & Boring Deployments</h3>
            <p className="principle-desc">
              CI/CD pipelines should automate linting, security scanning (Trivy, SonarQube), building, and deploying so shipping code becomes routine.
            </p>
          </div>

          <div className="bento-card principle-card reveal">
            <div className="principle-num">03</div>
            <h3 className="principle-title"><FaChartLine className="p-icon" /> Observability First</h3>
            <p className="principle-desc">
              Metrics with Prometheus, dashboards with Grafana, and logs with CloudWatch. Systems should proactively signal issues before users ever notice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
