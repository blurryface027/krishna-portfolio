import React, { useState } from 'react';
import { 
  FaAws, 
  FaDocker, 
  FaJenkins, 
  FaLinux, 
  FaGitAlt, 
  FaGithub, 
  FaShieldHalved,
  FaTerminal
} from 'react-icons/fa6';
import { 
  SiKubernetes, 
  SiHelm, 
  SiArgo, 
  SiAnsible, 
  SiTerraform, 
  SiPrometheus, 
  SiGrafana, 
  SiGnubash,
  SiNginx
} from 'react-icons/si';
import './Skills.css';

const categories = [
  { id: 'all', label: 'All Stack' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'devops', label: 'DevOps & CI/CD' },
  { id: 'iac', label: 'Infrastructure & OS' },
  { id: 'monitoring', label: 'Observability' },
  { id: 'vcs', label: 'Version Control' }
];

const skillCards = [
  {
    category: 'cloud',
    icon: <FaAws />,
    name: 'Amazon Web Services',
    desc: 'Core Cloud Provider',
    tags: ['EC2', 'ECS', 'EKS', 'ECR', 'Lambda', 'API Gateway', 'IAM', 'VPC', 'ALB', 'S3', 'CloudWatch', 'Route53', 'Amazon Polly']
  },
  {
    category: 'devops',
    icon: <FaDocker />,
    name: 'Containers & Orchestration',
    desc: 'Container Lifecycle & Packaging',
    tags: ['Docker', 'Kubernetes', 'Helm', 'Argo CD', 'Docker Scout']
  },
  {
    category: 'devops',
    icon: <FaJenkins />,
    name: 'CI/CD & DevSecOps',
    desc: 'Automated Pipelines & Security',
    tags: ['Jenkins', 'AWS CodePipeline', 'AWS CodeBuild', 'SonarQube', 'Trivy']
  },
  {
    category: 'iac',
    icon: <SiTerraform />,
    name: 'Infrastructure as Code',
    desc: 'Declarative Provisioning & Automation',
    tags: ['Terraform', 'Ansible']
  },
  {
    category: 'iac',
    icon: <FaLinux />,
    name: 'OS & Web Servers',
    desc: 'Linux Systems & Reverse Proxies',
    tags: ['Linux', 'Bash Shell', 'Nginx']
  },
  {
    category: 'monitoring',
    icon: <SiPrometheus />,
    name: 'Observability & Metrics',
    desc: 'System Telemetry & Alerting',
    tags: ['Prometheus', 'Grafana', 'AWS CloudWatch']
  },
  {
    category: 'vcs',
    icon: <FaGitAlt />,
    name: 'Version Control & Workflow',
    desc: 'Distributed Versioning & Operations',
    tags: ['Git', 'GitHub', 'GitHub Actions']
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillCards
    : skillCards.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Reference Section Heading: `toolchain.` */}
        <div className="section-header reveal">
          <h2 className="section-dot-title">
            toolchain<span className="dot">.</span>
          </h2>
          <p className="section-subtitle">
            Technologies, platforms, and tools I use to build, automate, and maintain cloud environments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs reveal">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Bento Grid */}
        <div className="skills-grid">
          {filteredSkills.map((card, i) => (
            <div
              key={card.name}
              className="bento-card skill-card reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-icon-badge">{card.icon}</div>
                <div>
                  <h3 className="skill-card-title">{card.name}</h3>
                  <p className="skill-card-desc">{card.desc}</p>
                </div>
              </div>

              <div className="skill-pills-wrap">
                {card.tags.map(tag => (
                  <span key={tag} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
