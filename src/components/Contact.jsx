import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane,
  FaCheck,
  FaXTwitter
} from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    // Simulate contact submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Reference Section Heading: `contact.` */}
        <div className="section-header reveal">
          <h2 className="section-dot-title">
            contact<span className="dot">.</span>
          </h2>
          <p className="section-subtitle">
            Have a role, project, or want to discuss cloud infrastructure? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Action Callout */}
          <div className="contact-info-col reveal">
            <div className="bento-card contact-cta-card">
              <h3 className="contact-headline">
                Let's build <br />
                <span className="gradient-text">something reliable.</span>
              </h3>
              <p className="contact-desc">
                Whether you're looking for a DevOps engineer, cloud architecture consulting, or infrastructure automation, feel free to reach out directly.
              </p>

              <div className="contact-methods">
                <a href="mailto:hello@kopscloud.in" className="contact-method-item">
                  <div className="method-icon"><FaEnvelope /></div>
                  <div>
                    <span className="method-label">Direct Email</span>
                    <span className="method-val">hello@kopscloud.in</span>
                  </div>
                </a>
              </div>

              <div className="contact-socials-wrap">
                <a
                  href="https://github.com/blurryface027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pill"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/blurryface027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pill"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://x.com/blurryface027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pill"
                >
                  <FaXTwitter /> Twitter/X
                </a>
                <a
                  href="https://drive.google.com/file/d/1EQ8k7yxcEh7hEl7hv9h_Sb8g2F1dSA8Z/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-pill btn-emerald-pill"
                >
                  <FaFileDownload /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col reveal">
            <div className="bento-card contact-form-card">
              <h3 className="form-title">Send Message</h3>

              {submitted ? (
                <div className="form-success-box">
                  <FaCheck className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject (Optional)</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="e.g. DevOps Role / Cloud Architecture"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell me about your project or message..."
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-emerald form-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
