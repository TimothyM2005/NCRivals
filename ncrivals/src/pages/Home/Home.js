import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to NC Rivals</h1>
        <p className={styles.subtitle}>Join us in the journey of building the future of robotics.</p>
        <Link to="/about" className={styles.learnMoreButton}>Learn More</Link>
      </div>
      <footer className={styles.footer}>
        <p>Contact Us:</p>
        <p>Email: info@ncrivals.com | Phone: (919) 691-6754</p>
        <p>Follow us on <a href="#">Twitter</a> | <a href="#">Instagram</a></p>
      </footer>
    </div>
  );
}

export default Home;
