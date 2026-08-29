export const portfolioData = {
  name: "Krishna",
  firstName: "Krishna",
  profileImages: [
    "/profile1.jpg",
    "/profile2.jpg",
    "/profile3.jpg",
    "/profile4.jpg",
    "/profile5.jpg",
    "/profile6.jpg",
    "/profile7.jpg",
    "/profile8.jpg",
    "/profile9.jpg",
    "/profile10.jpg"
  ],
  bannerImage: "/banner.jpg",
  location: "Gorakhpur, India",
  email: "krishna158310@gmail.com",
  website: "https://kopscloud.in",
  about: [
    "Hey, I'm Krishna, a DevOps and Cloud Enthusiast passionate about building production-grade CI/CD pipelines, cloud-native infrastructure on AWS, and automated container orchestration with Kubernetes.",
    "I specialize in architecting secure DevSecOps pipelines using Jenkins, Argo CD, Helm, SonarQube, Trivy, and Docker Scout, paired with end-to-end monitoring using Prometheus & Grafana.",
    "Daily Linux power user (Ubuntu & Arch Linux) with hands-on experience writing Infrastructure as Code using Terraform, Bash scripting, and managing containerized microservices."
  ],
  tldr: [
    "AWS & Cloud Infrastructure Specialist.",
    "DevSecOps & GitOps CI/CD Pipelines.",
    "Kubernetes, Docker & Helm Orchestration.",
    "Prometheus & Grafana Observability."
  ],
  socials: {
    github: "https://github.com/blurryface027",
    linkedin: "https://linkedin.com/in/blurryface027",
    twitter: "https://x.com/blurryface027",
    email: "mailto:krishna158310@gmail.com",
    resume: "#"
  },
  education: {
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Lucknow, India",
    degree: "Bachelor of Technology in Computer Science Engineering",
    cgpa: "7.0 CGPA",
    period: "2022 – 2026",
    coursework: "Operating Systems, Computer Networks, DBMS, Cloud Computing, Linux, Data Structures & Algorithms"
  },
  experience: [],
  projects: [
    {
      title: "Production-Style CI/CD Pipeline for 2048 Game on AWS",
      blurb: "Production-style CI/CD workflow on AWS using GitHub, CodePipeline, CodeBuild, ECR, and ECS Fargate behind an Application Load Balancer.",
      story: "Integrated GitHub with AWS CodePipeline for automatic deployment triggers on code pushes. Configured AWS CodeBuild for Docker image creation and ECR pushes. Deployed to ECS Fargate with ALB for high availability, managing IAM roles, buildspec.yml, and imagedefinitions.json.",
      stack: ["GitHub", "Docker", "AWS CodePipeline", "AWS CodeBuild", "Amazon ECR", "Amazon ECS Fargate", "Application Load Balancer", "IAM"],
      year: "2026",
      links: {
        source: "https://github.com/blurryface027/aws-codepipeline-2048"
      },
      featured: true,
      categories: ["Cloud", "CI/CD"]
    },
    {
      title: "End-to-End DevSecOps CI/CD Pipeline for Amazon Prime Video Clone",
      blurb: "End-to-end DevSecOps GitOps pipeline deploying an Amazon Prime Video Clone on Amazon EKS using Jenkins, SonarQube, Trivy, Argo CD, and Helm.",
      story: "Built continuous delivery pipeline on EKS following GitOps principles. Integrated SonarQube static analysis, Trivy filesystem scanning, and Docker Scout container image validation. Automated Kubernetes image tag updates in GitOps repo for Argo CD rollout and monitored cluster health with Prometheus & Grafana.",
      stack: ["AWS EC2", "Amazon EKS", "Jenkins", "Docker", "Docker Hub", "SonarQube", "Trivy", "Docker Scout", "Helm", "Argo CD", "Prometheus", "Grafana"],
      year: "2026",
      links: {
        source: "https://github.com/blurryface027/amazon-prime-devsecops"
      },
      featured: true,
      categories: ["CI/CD", "DevOps"]
    },
    {
      title: "Serverless Real-Time Text-to-Speech Application on AWS",
      blurb: "Serverless text-to-speech application on AWS powered by API Gateway, Lambda, Amazon Polly, and S3 pre-signed URLs.",
      story: "Designed and deployed a serverless app leveraging Amazon Polly for natural speech synthesis. Created a responsive HTML/CSS/JS frontend communicating with REST APIs. Ensured secure MP3 storage using S3 pre-signed URLs and resolved S3 Signature Version 4 regional endpoint compatibility.",
      stack: ["Amazon API Gateway", "AWS Lambda", "Amazon Polly", "Amazon S3", "IAM", "Python", "HTML", "CSS", "JavaScript"],
      year: "2026",
      links: {
        source: "https://github.com/blurryface027/amazon-polly-text-to-speech"
      },
      featured: true,
      categories: ["Cloud", "DevOps"]
    }
  ],
  skills: [
    // Cloud
    "AWS", "EC2", "ECS", "EKS", "ECR", "Lambda", "API Gateway", "IAM", "VPC", "ALB", "S3", "CloudWatch", "Route53", "Amazon Polly",
    // DevOps
    "Docker", "Kubernetes", "Jenkins", "AWS CodePipeline", "AWS CodeBuild", "Helm", "Argo CD", "SonarQube", "Trivy", "Docker Scout",
    // Infrastructure & Systems
    "Terraform", "Linux", "Ubuntu", "Arch Linux", "Bash", "Nginx",
    // Monitoring & VCS
    "Prometheus", "Grafana", "Git", "GitHub"
  ],
  writing: [
    {
      title: "Building Production-Style AWS CI/CD Pipelines with CodePipeline & ECS Fargate",
      summary: "Detailed walkthrough of zero-downtime microservice deployments, buildspec configurations, ECR image tagging, and IAM security controls.",
      date: "Aug 2026",
      readingTime: "12 min read",
      url: "https://github.com/blurryface027"
    },
    {
      title: "GitOps DevSecOps Pipeline on Amazon EKS with Jenkins & Argo CD",
      summary: "Integrating SonarQube, Trivy, and Docker Scout into Jenkins pipelines for automated Kubernetes security scans and GitOps sync.",
      date: "Jul 2026",
      readingTime: "15 min read",
      url: "https://github.com/blurryface027"
    },
    {
      title: "Serverless Speech Synthesis with AWS Lambda, Polly & S3 Pre-Signed URLs",
      summary: "Architecting low-latency serverless speech conversion REST APIs with secure S3 pre-signed storage and IAM communication policies.",
      date: "Jun 2026",
      readingTime: "10 min read",
      url: "https://github.com/blurryface027"
    }
  ],
  github: {
    username: "blurryface027"
  }
};

export const rotatingTitles = [
  "DevOps and Cloud Enthusiast",
  "AWS Cloud Architect",
  "DevSecOps & GitOps Specialist",
  "Linux & Automation Engineer"
];
