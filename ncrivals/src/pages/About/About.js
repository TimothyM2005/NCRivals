import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About NC Rivals</h2>
        <p className={styles.description}>
        NC Rival Robotics is a dedicated team of engineers participating in the Rivals Robotics League. Our mission is to innovate, learn, and compete at the highest level of robotics competitions. We strive to inspire the next generation of engineers and technologists. Build new and unique solutions and push the boundaries of technology.
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
