import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>About NC Rivals</h2>
        <p>
          NC Rivals is a dedicated robotics team participating in the Rivals Robotics League. Our mission is to innovate, learn, and compete at the highest level of robotics competitions. We strive to inspire the next generation of engineers and technologists.
        </p>
        <h3>Our Team</h3>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/assets/member1.jpg" alt="Team Member" />
            <p>John Doe - Lead Engineer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member2.jpg" alt="Team Member" />
            <p>Jane Smith - Software Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
}

export default About;
