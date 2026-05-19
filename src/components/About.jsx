import React from 'react';
import { FaCog } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="section-label reveal">About Me</div>
      <h2 className="section-title reveal">The engineer<br/>behind the ops</h2>
      <div className="about-grid">

        <div className="about-text reveal">
          <p>Hi, I'm <strong>Krishna</strong> — a DevOps Engineer who thrives at the intersection of development and operations. I believe infrastructure should be <strong>code</strong>, deployments should be <strong>boring</strong>, and on-call should be <strong>rare</strong>.</p>
          <p>I work with teams to automate everything that can be automated, build observability into systems from day one, and design architectures that scale without drama.</p>
          <p>When I'm not tuning Kubernetes clusters or debugging YAML, I'm exploring new tools in the cloud-native ecosystem and contributing to internal platform teams.</p>
          <div className="about-facts">
            <div className="fact">
              <div className="fact-key">Location</div>
              <div className="fact-val">India</div>
            </div>
            <div className="fact">
              <div className="fact-key">Role</div>
              <div className="fact-val">DevOps Engineer</div>
            </div>
            <div className="fact">
              <div className="fact-key">Focus</div>
              <div className="fact-val">Cloud & Automation</div>
            </div>
            <div className="fact">
              <div className="fact-key">Status</div>
              <div className="fact-val" style={{ color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="blink-dot"></span> Open to work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
