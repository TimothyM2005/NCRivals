import React from 'react';
import styles from './GetInvolved.module.css';

function GetInvolved() {
  return (
    <section className={styles.getInvolved}>
      <div className={styles.container}>
        <h2>Get Involved</h2>
        <div className={styles.options}>
          <div className={styles.optionCard}>
            <h3>Become a Sponsor</h3>
            <p>Teams like us rely on Sponsorship to be able to be sucsessful. Sponsorships allow for us to be able to afford for our robots and for allowing all of our team members to be able to go and experiance compititons. We are all currently former FRC or FTC students and 2nd Years in college.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
