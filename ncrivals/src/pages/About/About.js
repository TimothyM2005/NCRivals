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
            <img src="/assets/Timothy.jpg" alt="Timothy Mitchell" />
            <p>Timothy Mitchell</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/Ben.jpg" alt="Ben Caunt" />
            <p>Ben Caunt</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/Lucian.jpg" alt="Lucian Genova" />
            <p>Lucian Genova</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member4.jpg" alt="Eric" />
            <p>Eric</p>
          </div>
          <div className={styles.teamMember}>
            <img src="/assets/member5.jpg" alt="Jacob Vanmeter" />
            <p>Jacob Vanmeter</p>
          </div>
          </div>
        </div>
    </section>
  );
}

export default About;
