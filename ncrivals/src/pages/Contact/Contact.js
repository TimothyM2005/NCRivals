import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
