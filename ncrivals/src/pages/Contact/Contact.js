import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzaOx4L2NbdhW3Tk7gr95rsN7FNhs_-dtqwkUH71Nwxx3ARLkLM5GrAPED7_hSq6j2A/exec';

    fetch(scriptURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((result) => {
        setFormStatus({ success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setFormStatus({ success: null, error: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {/* Feedback messages */}
        {formStatus.success && <p className={styles.successMessage}>{formStatus.success}</p>}
        {formStatus.error && <p className={styles.errorMessage}>{formStatus.error}</p>}
      </div>
    </section>
  );
}

export default Contact;


//https://script.google.com/macros/s/AKfycbzaOx4L2NbdhW3Tk7gr95rsN7FNhs_-dtqwkUH71Nwxx3ARLkLM5GrAPED7_hSq6j2A/exec