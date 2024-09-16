import React from 'react';
import styles from './GetInvolved.module.css';

function GetInvolved() {
  return (
    <section className={styles.getInvolved}>
      <div className={styles.container}>
        <h2>Get Involved</h2>
        <div className={styles.options}>
          <div className={styles.optionCard}>
            <h3>Join Our Team</h3>
            <p>Interested in robotics? Join NC Rivals and help build the future of engineering.</p>
          </div>
          <div className={styles.optionCard}>
            <h3>Become a Sponsor</h3>
            <p>Support NC Rivals and contribute to the advancement of technology and education.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
