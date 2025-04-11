import React from 'react';
import styles from './GetInvolved.module.css';

function GetInvolved() {
  return (
    <section className={styles.getInvolved}>
      <div className={styles.container}>
        <h2>Get Involved</h2>
        <div className={styles.options}>
          <div className={styles.optionCard}>
            <h3> 1. Why Support Us</h3>
            <p>We're a student-led collegiate robotics team made up of former FIRST participants who are passionate about innovation, engineering, and mentoring the next generation of STEM leaders. Every dollar and volunteer hour goes directly into building competitive robots, engaging our community, and inspiring young minds.</p>
            <h3>2. Ways to Get Involved</h3>
            <h6>Sponsor Us</h6>
            <p> Help fund parts, tools, competition fees, and travel. We’ll proudly display your logo and recognize your contribution.</p>
            <h6>Donate</h6>
            <p>One-time or recurring contributions of any amount helps keep our team moving forward.</p>
            <h3>3. Get in Touch</h3>
            <p>Ready to make a difference? [Contact us] or email us at [your email].</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
