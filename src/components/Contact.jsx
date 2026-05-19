import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-label reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>Get In Touch</div>
      <h2 className="contact-headline reveal">Let's build<br/><span>something</span><br/>reliable.</h2>
      <p className="contact-sub reveal">
        Have a project, a role, or just want to talk infrastructure?<br/>
        My inbox is always open.
      </p>
      <div className="contact-links reveal">
        <a href="mailto:hello@kopscloud.in" className="contact-link"><FaEnvelope /> Email Me</a>
        <a href="https://github.com/blurryface027" target="_blank" rel="noopener noreferrer" className="contact-link"><FaGithub /> GitHub</a>
        <a href="https://linkedin.com/in/blurryface027" target="_blank" rel="noopener noreferrer" className="contact-link"><FaLinkedin /> LinkedIn</a>
        <a href="https://twitter.com/kopscloud" target="_blank" rel="noopener noreferrer" className="contact-link"><FaXTwitter /> X</a>
        <a href="#" className="contact-link"><FaFileDownload /> Resume</a>
      </div>
      <a href="mailto:hello@kopscloud.in" className="btn-primary reveal" style={{ margin: '0 auto', display: 'inline-flex' }}>
        Say Hello →
      </a>
    </section>
  );
};

export default Contact;
