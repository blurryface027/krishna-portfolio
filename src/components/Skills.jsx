import React from 'react';
import { FaAws, FaDocker, FaJenkins, FaLinux, FaPython, FaGitAlt, FaMicrosoft } from 'react-icons/fa';
import { 
  SiGooglecloud, 
  SiKubernetes, 
  SiHelm, 
  SiArgo, 
  SiGithubactions, 
  SiGitlab, 
  SiCircleci, 
  SiAnsible, 
  SiTerraform, 
  SiPulumi, 
  SiPacker, 
  SiVault, 
  SiPrometheus, 
  SiGrafana, 
  SiElastic, 
  SiDatadog, 
  SiPagerduty, 
  SiGnubash, 
  SiYaml, 
  SiGo 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="section-label reveal">Technical Skills</div>
        <h2 className="section-title reveal">Tools of<br/>the trade</h2>
        <div className="skills-grid">
          <div className="skill-cat reveal" style={{ transitionDelay: '0s' }}>
            <span className="skill-cat-icon"><FaAws /></span>
            <div className="skill-cat-name">Cloud Platforms</div>
            <div className="skill-tags">
              <span className="skill-tag"><FaAws /> AWS</span>
              <span className="skill-tag"><SiGooglecloud /> GCP</span>
              <span className="skill-tag"><FaMicrosoft /> Azure</span>
              <span className="skill-tag"><FaAws /> EC2</span>
              <span className="skill-tag"><FaAws /> S3</span>
              <span className="skill-tag"><FaAws /> Lambda</span>
              <span className="skill-tag"><FaAws /> CloudFormation</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.06s' }}>
            <span className="skill-cat-icon"><FaDocker /></span>
            <div className="skill-cat-name">Containers & Orchestration</div>
            <div className="skill-tags">
              <span className="skill-tag"><FaDocker /> Docker</span>
              <span className="skill-tag"><SiKubernetes /> Kubernetes</span>
              <span className="skill-tag"><SiHelm /> Helm</span>
              <span className="skill-tag"><FaAws /> EKS</span>
              <span className="skill-tag"><SiGooglecloud /> GKE</span>
              <span className="skill-tag"><SiArgo /> ArgoCD</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.12s' }}>
            <span className="skill-cat-icon"><FaJenkins /></span>
            <div className="skill-cat-name">CI/CD & Automation</div>
            <div className="skill-tags">
              <span className="skill-tag"><FaJenkins /> Jenkins</span>
              <span className="skill-tag"><SiGithubactions /> GitHub Actions</span>
              <span className="skill-tag"><SiGitlab /> GitLab CI</span>
              <span className="skill-tag"><SiCircleci /> CircleCI</span>
              <span className="skill-tag"><SiAnsible /> Ansible</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.18s' }}>
            <span className="skill-cat-icon"><SiTerraform /></span>
            <div className="skill-cat-name">Infrastructure as Code</div>
            <div className="skill-tags">
              <span className="skill-tag"><SiTerraform /> Terraform</span>
              <span className="skill-tag"><SiPulumi /> Pulumi</span>
              <span className="skill-tag"><FaAws /> CDK</span>
              <span className="skill-tag"><SiPacker /> Packer</span>
              <span className="skill-tag"><SiVault /> Vault</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.24s' }}>
            <span className="skill-cat-icon"><SiPrometheus /></span>
            <div className="skill-cat-name">Monitoring & Observability</div>
            <div className="skill-tags">
              <span className="skill-tag"><SiPrometheus /> Prometheus</span>
              <span className="skill-tag"><SiGrafana /> Grafana</span>
              <span className="skill-tag"><SiElastic /> ELK Stack</span>
              <span className="skill-tag"><SiDatadog /> Datadog</span>
              <span className="skill-tag"><SiPagerduty /> PagerDuty</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.3s' }}>
            <span className="skill-cat-icon"><FaLinux /></span>
            <div className="skill-cat-name">Scripting & OS</div>
            <div className="skill-tags">
              <span className="skill-tag"><SiGnubash /> Bash</span>
              <span className="skill-tag"><FaPython /> Python</span>
              <span className="skill-tag"><FaLinux /> Linux</span>
              <span className="skill-tag"><SiGo /> Go</span>
              <span className="skill-tag"><SiYaml /> YAML</span>
              <span className="skill-tag"><FaGitAlt /> Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
