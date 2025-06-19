import { useState, useRef, useEffect } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    success: null,
    error: null,
  });

  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Auto-resize textarea
  const handleTextareaChange = (e) => {
    handleChange(e);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.max(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [formData.message]);

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return 'All fields are required.';
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ success: null, error: validationError });
      return;
    }

    const scriptURL = 'https://' // 'https://script.google.com/macros/s/AKfycbzaOx4L2NbdhW3Tk7gr95rsN7FNhs_-dtqwkUH71Nwxx3ARLkLM5GrAPED7_hSq6j2A/exec';

    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((_result) => {
        setFormStatus({ success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((_error) => {
        setFormStatus({ success: null, error: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Ready to collaborate, sponsor our team, or just want to learn more about our robotics journey? 
            We'd love to hear from you and will respond as soon as possible.
          </p>
        </div>

        {/* Quick Stats */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className={styles.statLabel}>Quick Response</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className={styles.statLabel}>Secure & Private</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2V6a2 2 0 012-2h4a2 2 0 012 2v2z" />
              </svg>
            </div>
            <div className={styles.statLabel}>Direct Communication</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Contact Information */}
          <div className={styles.contactInfoSection}>
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            <p className={styles.sectionDescription}>
              Prefer to reach out directly? Here are other ways to connect with NC Rivals.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h4>Email Us</h4>
                  <p>ncrivals@example.com</p>
                  <a href="mailto:ncrivals@example.com" className={styles.methodLink}>
                    Send Email
                    <svg className={styles.linkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h4>Visit Us</h4>
                  <p>North Carolina<br />Engineering Building</p>
                  <span className={styles.methodNote}>By appointment only</span>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h4>Follow Us</h4>
                  <p>Stay updated with our latest projects and achievements</p>
                  <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>
                      <span>Instagram</span>
                    </a>
                    <a href="#" className={styles.socialLink}>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formWrapper}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    ref={textareaRef}
                    name="message"
                    value={formData.message}
                    onChange={handleTextareaChange}
                    placeholder="Tell us about your inquiry, sponsorship opportunity, or how you'd like to get involved..."
                    required
                    className={styles.autoResizeTextarea}
                  ></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  <span>Send Message</span>
                  <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>

              {/* Feedback messages */}
              {formStatus.success && (
                <div className={styles.messageWrapper}>
                  <div className={styles.successMessage}>
                    <svg className={styles.messageIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formStatus.success}</span>
                  </div>
                </div>
              )}
              {formStatus.error && (
                <div className={styles.messageWrapper}>
                  <div className={styles.errorMessage}>
                    <svg className={styles.messageIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{formStatus.error}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


//https://script.google.com/macros/s/AKfycbzaOx4L2NbdhW3Tk7gr95rsN7FNhs_-dtqwkUH71Nwxx3ARLkLM5GrAPED7_hSq6j2A/exec