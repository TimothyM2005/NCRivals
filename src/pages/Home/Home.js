import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>NC Rivals</h1>
          <p className={styles.subtitle}>
            Building the future of robotics through innovation, collaboration, and competitive excellence.
          </p>
          <div className={styles.buttonGroup}>
            <Link to="/about" className={styles.primaryButton}>
              Discover Our Mission
            </Link>
            <Link to="/team" className={styles.secondaryButton}>
              Meet the Team
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.robotImagePlaceholder}>
            <img 
              src="/assets/Robot-Clear.png" 
              alt="NC Rivals Robot" 
              className={styles.robotImage}
            />
          </div>
          <div className={styles.floatingElements}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>⚡</div>
          <h3>Innovation</h3>
          <p>Cutting-edge robotics solutions and creative problem-solving</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🏆</div>
          <h3>Competition</h3>
          <p>Competing at the highest level in Rival Robotics tournaments</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🤝</div>
          <h3>Teamwork</h3>
          <p>Collaborative approach to engineering and design</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.stat}>
          <div className={styles.statNumber}>2</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>3+</div>
          <div className={styles.statLabel}>Competitions</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statNumber}>6</div>
          <div className={styles.statLabel}>Team Members</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </div>
  );
}

export default Home;
