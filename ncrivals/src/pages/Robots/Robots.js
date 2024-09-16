import React from 'react';
import styles from './Robots.module.css';

function Robots() {
  return (
    <section className={styles.robots}>
      <div className={styles.container}>
        <h2>Our Robots</h2>
        <div className={styles.robotGrid}>
          <div className={styles.robotCard}>
            <img src="/assets/robot1.jpg" alt="Robot 1" />
            <p>RivalBot 2024 - Autonomous Navigation</p>
          </div>
          <div className={styles.robotCard}>
            <img src="/assets/robot2.jpg" alt="Robot 2" />
            <p>Speedster 2023 - High-Speed Rover</p>
          </div>
          {/* Add more robots as needed */}
        </div>
      </div>
    </section>
  );
}

export default Robots;
