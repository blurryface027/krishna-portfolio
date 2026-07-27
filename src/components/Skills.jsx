import React from 'react';
import { FaAws, FaDocker, FaJenkins, FaLinux, FaGitAlt, FaGithub } from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiHelm, 
  SiArgo, 
  SiAnsible, 
  SiTerraform, 
  SiPrometheus, 
  SiGrafana, 
  SiGnubash 
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
            <div className="skill-cat-name">Cloud</div>
            <div className="skill-tags">
              <span className="skill-tag"><FaAws /> AWS</span>
              <span className="skill-tag">EC2</span>
              <span className="skill-tag">ECS</span>
              <span className="skill-tag">EKS</span>
              <span className="skill-tag">ECR</span>
              <span className="skill-tag">Lambda</span>
              <span className="skill-tag">API Gateway</span>
              <span className="skill-tag">IAM</span>
              <span className="skill-tag">VPC</span>
              <span className="skill-tag">ALB</span>
              <span className="skill-tag">S3</span>
              <span className="skill-tag">CloudWatch</span>
              <span className="skill-tag">Route53</span>
              <span className="skill-tag">Amazon Polly</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.06s' }}>
            <span className="skill-cat-icon"><FaDocker /></span>
            <div className="skill-cat-name">DevOps</div>
            <div className="skill-tags">
              <span className="skill-tag"><FaDocker /> Docker</span>
              <span className="skill-tag"><SiKubernetes /> Kubernetes</span>
              <span className="skill-tag"><FaJenkins /> Jenkins</span>
              <span className="skill-tag"><FaAws /> AWS CodePipeline</span>
              <span className="skill-tag"><FaAws /> AWS CodeBuild</span>
              <span className="skill-tag"><SiHelm /> Helm</span>
              <span className="skill-tag"><SiArgo /> Argo CD</span>
              <span className="skill-tag">SonarQube</span>
              <span className="skill-tag">Trivy</span>
              <span className="skill-tag">Docker Scout</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.12s' }}>
            <span className="skill-cat-icon"><SiTerraform /></span>
            <div className="skill-cat-name">Infrastructure</div>
            <div className="skill-tags">
              <span className="skill-tag"><SiTerraform /> Terraform</span>
              <span className="skill-tag"><SiAnsible /> Ansible</span>
              <span className="skill-tag"><FaLinux /> Linux</span>
              <span className="skill-tag"><SiGnubash /> Bash</span>
              <span className="skill-tag">Nginx</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.18s' }}>
            <span className="skill-cat-icon"><SiPrometheus /></span>
            <div className="skill-cat-name">Monitoring</div>
            <div className="skill-tags">
              <span className="skill-tag"><SiPrometheus /> Prometheus</span>
              <span className="skill-tag"><SiGrafana /> Grafana</span>
            </div>
          </div>
          <div className="skill-cat reveal" style={{ transitionDelay: '0.24s' }}>
            <span className="skill-cat-icon"><FaGitAlt /></span>
            <div className="skill-cat-name">Version Control</div>
            <div className="skill-tags">
              <span className="skill-tag"><FaGitAlt /> Git</span>
              <span className="skill-tag"><FaGithub /> GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
