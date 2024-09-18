import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About NC Rivals</h2>
        <p className={styles.description}>
          NC Rivals is a dedicated robotics team participating in the Rivals Robotics League. Our mission is to innovate, learn, and compete at the highest level of robotics competitions. We strive to inspire the next generation of engineers and technologists.
        </p>
        <h3 className={styles.subheading}>Our Team</h3>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/assets/Timothy.jpg" alt="Timothy Mitchell - Lead Engineer" />
            <p>John Doe - Lead Engineer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member2.jpg" alt="Jane Smith - Software Developer" />
            <p>Jane Smith - Software Developer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member3.jpg" alt="Sara Lee - Project Manager" />
            <p>Sara Lee - Project Manager</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member4.jpg" alt="Tom White - Hardware Specialist" />
            <p>Tom White - Hardware Specialist</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member5.jpg" alt="Anna Patel - Electrical Engineer" />
            <p>Anna Patel - Electrical Engineer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member6.jpg" alt="Kyle Chang - CAD Designer" />
            <p>Kyle Chang - CAD Designer</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member7.jpg" alt="Emma Gomez - Outreach Coordinator" />
            <p>Emma Gomez - Outreach Coordinator</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
