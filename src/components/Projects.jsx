import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-label reveal">Featured Work</div>
      <h2 className="section-title reveal">Projects that<br/>went to prod</h2>
      <div className="projects-grid">
        <div className="project-card reveal" style={{ transitionDelay: '0s' }}>
          <span className="project-num">01 / PROJECT</span>
          <h3 className="project-title">Amazon Polly Text-to-Speech</h3>
          <p className="project-desc">Serverless text-to-speech application utilizing Amazon Polly to convert text into lifelike speech.</p>
          <div className="project-stack">
            <span className="stack-pill">AWS</span>
            <span className="stack-pill">Amazon Polly</span>
            <span className="stack-pill">Serverless</span>
          </div>
          <a href="https://github.com/blurryface027/amazon-polly-text-to-speech" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
        </div>
        <div className="project-card reveal" style={{ transitionDelay: '0.08s' }}>
          <span className="project-num">02 / PROJECT</span>
          <h3 className="project-title">Amazon Prime DevSecOps</h3>
          <p className="project-desc">Implemented a comprehensive DevSecOps pipeline for an Amazon Prime clone, integrating security checks at every stage.</p>
          <div className="project-stack">
            <span className="stack-pill">DevSecOps</span>
            <span className="stack-pill">CI/CD</span>
            <span className="stack-pill">Security</span>
          </div>
          <a href="https://github.com/blurryface027/amazon-prime-devsecops" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
        </div>
        <div className="project-card reveal" style={{ transitionDelay: '0.16s' }}>
          <span className="project-num">03 / PROJECT</span>
          <h3 className="project-title">AWS CodePipeline 2048</h3>
          <p className="project-desc">Automated deployment of the classic 2048 game using AWS CodePipeline for continuous integration and continuous delivery.</p>
          <div className="project-stack">
            <span className="stack-pill">AWS CodePipeline</span>
            <span className="stack-pill">CI/CD</span>
            <span className="stack-pill">Automation</span>
          </div>
          <a href="https://github.com/blurryface027/aws-codepipeline-2048" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
