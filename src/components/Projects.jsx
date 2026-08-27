import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare, FaServer, FaShieldHalved, FaGears, FaCloud } from 'react-icons/fa6';
import './Projects.css';

const projectsData = [
  {
    num: '01',
    category: 'SERVERLESS ARCHITECTURE',
    title: 'Amazon Polly Text-to-Speech',
    desc: 'Serverless text-to-speech application utilizing Amazon Polly to convert text into lifelike speech with real-time audio rendering and cloud storage.',
    featured: true,
    icon: <FaCloud />,
    stack: ['AWS', 'Amazon Polly', 'Lambda', 'API Gateway', 'S3', 'Serverless'],
    github: 'https://github.com/blurryface027/amazon-polly-text-to-speech',
    live: 'https://github.com/blurryface027/amazon-polly-text-to-speech'
  },
  {
    num: '02',
    category: 'DEVSECOPS PIPELINE',
    title: 'Amazon Prime DevSecOps',
    desc: 'Implemented an automated DevSecOps pipeline for an Amazon Prime clone. Features automated vulnerability scanning with Trivy, SonarQube quality gates, and Docker Scout security checks.',
    featured: false,
    icon: <FaShieldHalved />,
    stack: ['DevSecOps', 'Jenkins', 'Docker', 'Trivy', 'SonarQube', 'Security'],
    github: 'https://github.com/blurryface027/amazon-prime-devsecops',
    live: 'https://github.com/blurryface027/amazon-prime-devsecops'
  },
  {
    num: '03',
    category: 'CI/CD AUTOMATION',
    title: 'AWS CodePipeline 2048',
    desc: 'Automated deployment pipeline for the classic 2048 game using AWS CodePipeline & CodeBuild for continuous integration, delivering zero-downtime updates to S3 and CloudFront.',
    featured: false,
    icon: <FaGears />,
    stack: ['AWS CodePipeline', 'AWS CodeBuild', 'S3', 'CloudFront', 'CI/CD'],
    github: 'https://github.com/blurryface027/aws-codepipeline-2048',
    live: 'https://github.com/blurryface027/aws-codepipeline-2048'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Reference Section Heading: `shipped.` */}
        <div className="section-header reveal">
          <h2 className="section-dot-title">
            shipped<span className="dot">.</span>
          </h2>
          <p className="section-subtitle">
            Infrastructure pipelines, serverless apps, and DevSecOps workflows built and deployed.
          </p>
        </div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={`bento-card project-card ${project.featured ? 'project-featured' : ''} reveal`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="project-card-inner">
                <div className="project-top-meta">
                  <span className="project-num-badge">
                    {project.num} / {project.category}
                  </span>
                  <div className="project-icon-badge">{project.icon}</div>
                </div>

                <h3 className="project-title">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title} <FaArrowUpRightFromSquare className="p-arrow" />
                  </a>
                </h3>

                <p className="project-desc">{project.desc}</p>

                <div className="project-stack">
                  {project.stack.map(tech => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-pill project-btn"
                  >
                    <FaGithub /> View Repository <FaArrowUpRightFromSquare className="external-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
