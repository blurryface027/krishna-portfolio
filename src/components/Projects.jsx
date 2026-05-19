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
          <h3 className="project-title">K8s GitOps Platform</h3>
          <p className="project-desc">Built a production-grade GitOps platform using ArgoCD and Helm on EKS. Reduced deployment time from 45 minutes to under 8 minutes across 12 microservices.</p>
          <div className="project-stack">
            <span className="stack-pill">Kubernetes</span>
            <span className="stack-pill">ArgoCD</span>
            <span className="stack-pill">Helm</span>
            <span className="stack-pill">AWS EKS</span>
          </div>
          <a href="#" className="project-link">View Details →</a>
        </div>
        <div className="project-card reveal" style={{ transitionDelay: '0.08s' }}>
          <span className="project-num">02 / PROJECT</span>
          <h3 className="project-title">Zero-Downtime Pipeline</h3>
          <p className="project-desc">Designed a blue-green CI/CD pipeline with automated rollback using GitHub Actions and Terraform. Achieved 99.98% deployment success rate over 6 months.</p>
          <div className="project-stack">
            <span className="stack-pill">GitHub Actions</span>
            <span className="stack-pill">Terraform</span>
            <span className="stack-pill">AWS ALB</span>
            <span className="stack-pill">Docker</span>
          </div>
          <a href="#" className="project-link">View Details →</a>
        </div>
        <div className="project-card reveal" style={{ transitionDelay: '0.16s' }}>
          <span className="project-num">03 / PROJECT</span>
          <h3 className="project-title">Infra Cost Optimizer</h3>
          <p className="project-desc">Automated cloud cost analysis tool using Python and AWS Cost Explorer. Identified and eliminated $14k/month in unused resources with weekly Slack reports.</p>
          <div className="project-stack">
            <span className="stack-pill">Python</span>
            <span className="stack-pill">AWS Lambda</span>
            <span className="stack-pill">Cost Explorer</span>
            <span className="stack-pill">Slack API</span>
          </div>
          <a href="#" className="project-link">View Details →</a>
        </div>
        <div className="project-card reveal" style={{ transitionDelay: '0.24s' }}>
          <span className="project-num">04 / PROJECT</span>
          <h3 className="project-title">Observability Stack</h3>
          <p className="project-desc">Deployed end-to-end observability with Prometheus, Grafana, and Loki. Created 40+ dashboards and automated alerting that cut MTTR by 60%.</p>
          <div className="project-stack">
            <span className="stack-pill">Prometheus</span>
            <span className="stack-pill">Grafana</span>
            <span className="stack-pill">Loki</span>
            <span className="stack-pill">PagerDuty</span>
          </div>
          <a href="#" className="project-link">View Details →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
