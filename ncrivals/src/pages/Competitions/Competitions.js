import React from 'react';
import styles from './Competitions.module.css';

function Competitions() {
  return (
    <section className={styles.competitions}>
      <div className={styles.container}>
        <h2>Competitions</h2>
        <h3>Upcoming Events</h3>
        <ul className={styles.competitionList}>
          <li>Rivals Robotics Championship - December 2024</li>
          <li>Spring Regional Qualifiers - March 2025</li>
        </ul>
        <h3>Past Events</h3>
        <ul className={styles.competitionList}>
          <li>Fall Robotics League - 2023</li>
          <li>Summer Invitational - 2023</li>
        </ul>
      </div>
    </section>
  );
}

export default Competitions;
