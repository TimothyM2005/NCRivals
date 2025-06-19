import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.heading}>About NC Rival Robotics</h1>
          <p className={styles.description}>
            NC Rival Robotics is a dedicated team of engineers participating in
            the Rivals Robotics League. Our mission is to innovate, learn, and
            compete at the highest level of robotics competitions. We strive to
            inspire the next generation of engineers and technologists. Build
            new and unique solutions and push the boundaries of technology.
          </p>
        </div>

        <div className={styles.missionSection}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            To push the boundaries of robotics innovation while fostering a
            collaborative environment where creativity meets engineering
            excellence. We believe in building not just robots, but the future
            of technology.
          </p>
        </div>

        <div className={styles.teamSection}>
          <h2 className={styles.teamTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img src="/assets/Timothy.jpg" alt="Timothy Mitchell" />
              <h3 className={styles.memberName}>Timothy Mitchell</h3>
              <div className={styles.memberButtons}>
                <a
                  href="https://www.linkedin.com/in/timothy-mitchell-303543279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinButton}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Ben.jpg" alt="Ben Caunt" />
              <h3 className={styles.memberName}>Ben Caunt</h3>
              <div className={styles.memberButtons}>
                <a
                  href="https://linkedin.com/in/ben-caunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinButton}
                >
                  LinkedIn
                </a>
                <a
                  href="https://bencaunt.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portfolioButton}
                >
                  Portfolio
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Lucien.jpg" alt="Lucien Genova" />
              <h3 className={styles.memberName}>Lucien Genova</h3>
              <div className={styles.memberButtons}>
                <a
                  href="https://www.linkedin.com/in/lucien-genova-693615246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinButton}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Robot-Clear.png" alt="Eric" />
              <h3 className={styles.memberName}>Eric</h3>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Robot-Clear.png" alt="Jacob Van Meter" />
              <h3 className={styles.memberName}>Jacob Van Meter</h3>
              <div className={styles.memberButtons}>
                <a
                  href="https://www.linkedin.com/in/jacob-van-meter-nc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinButton}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/assets/Robot-Clear.png" alt="Matthew Mitchell" />
              <h3 className={styles.memberName}>Matthew Mitchell</h3>
              <div className={styles.memberButtons}>
                <a
                  href="https://www.linkedin.com/in/matthew-mitchell-092b2b247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinButton}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Years of Experience</div>
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
