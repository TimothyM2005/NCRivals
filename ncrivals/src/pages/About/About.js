import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>About NC Rivals</h1>
          <p className={styles.description}>
            NC Rival Robotics is a dedicated team of engineers participating in the Rivals Robotics League. Our mission is to innovate, learn, and compete at the highest level of robotics competitions. We strive to inspire the next generation of engineers and technologists. Build new and unique solutions and push the boundaries of technology.
          </p>
        </div>

        <div className={styles.missionSection}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To push the boundaries of robotics innovation while fostering a collaborative environment where creativity meets engineering excellence. We believe in building not just robots, but the future of technology.
          </p>
        </div>

        <div className={styles.teamSection}>
          <h2 className={styles.teamTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img src="/assets/Timothy.jpg" alt="Timothy Mitchell" />
              <h3 className={styles.memberName}>Timothy Mitchell</h3>
              <div className={styles.memberButtons}>
                <a href="https://linkedin.com/in/timothy-mitchell" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                  LinkedIn
                </a>
                <a href="https://timothy-portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                  Portfolio
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Ben.jpg" alt="Ben Caunt" />
              <h3 className={styles.memberName}>Ben Caunt</h3>
              <div className={styles.memberButtons}>
                <a href="https://linkedin.com/in/ben-caunt" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                  LinkedIn
                </a>
                <a href="https://ben-portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                  Portfolio
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Lucian.jpg" alt="Lucian Genova" />
              <h3 className={styles.memberName}>Lucian Genova</h3>
              <div className={styles.memberButtons}>
                <a href="https://linkedin.com/in/lucian-genova" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                  LinkedIn
                </a>
                <a href="https://lucian-portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                  Portfolio
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/member4.jpg" alt="Eric" />
              <h3 className={styles.memberName}>Eric</h3>
              <div className={styles.memberButtons}>
                <a href="https://linkedin.com/in/eric" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                  LinkedIn
                </a>
                <a href="https://eric-portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                  Portfolio
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/member5.jpg" alt="Jacob Vanmeter" />
              <h3 className={styles.memberName}>Jacob Vanmeter</h3>
              <div className={styles.memberButtons}>
                <a href="https://linkedin.com/in/jacob-vanmeter" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                  LinkedIn
                </a>
                <a href="https://jacob-portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                  Portfolio
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/member6.jpg" alt="Mathew Mitchell" />
              <h3 className={styles.memberName}>Mathew Mitchell</h3>
              <div className={styles.memberButtons}>
                <a href="https://linkedin.com/in/jacob-vanmeter" target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                  LinkedIn
                </a>
                <a href="https://jacob-portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioButton}>
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Competitions</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>6</div>
            <div className={styles.statLabel}>Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
