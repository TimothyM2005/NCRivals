import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to NC Rivals</h1>
        <p>We are a passionate robotics team competing in the Rivals Robotics League.</p>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
    </section>
  );
}

export default Home;
