import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GetInvolved.module.css';

function GetInvolved() {
  return (
    <div className={styles.getInvolvedContainer}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Get Involved</h1>
          <p className={styles.subtitle}>
            Join us in shaping the future of robotics through innovation, collaboration, and mentorship.
            Together, we can inspire the next generation of STEM leaders.
          </p>
        </div>

        {/* Impact Stats */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>6</div>
            <div className={styles.statLabel}>Team Members</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2</div>
            <div className={styles.statLabel}>Competitions</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>40</div>
            <div className={styles.statLabel}>Hours Per Week</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Why Support Us Section */}
          <div className={styles.supportSection}>
            <h2 className={styles.sectionTitle}>Why Support NC Rivals?</h2>
            <p className={styles.sectionDescription}>
              We're a student-led collegiate robotics team made up of former FIRST participants who are passionate about innovation, engineering, and mentoring the next generation of STEM leaders.
            </p>
            
            <div className={styles.impactList}>
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className={styles.impactContent}>
                  <h4>Direct Student Impact</h4>
                  <p>Support hands-on learning and skill development in engineering and robotics</p>
                </div>
              </div>
              
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className={styles.impactContent}>
                  <h4>Innovation & Research</h4>
                  <p>Fund cutting-edge robotics research and technological breakthroughs</p>
                </div>
              </div>
              
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className={styles.impactContent}>
                  <h4>Community Building</h4>
                  <p>Help build stronger connections between industry and education</p>
                </div>
              </div>

              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <div className={styles.impactContent}>
                  <h4>Future Leaders</h4>
                  <p>Inspire and mentor the next generation of engineers and innovators</p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Involved Options */}
          <div className={styles.involvementSection}>
            <h2 className={styles.sectionTitle}>Ways to Get Involved</h2>
            
            <div className={styles.optionsGrid}>
              {/* Sponsorship Option */}
              <div className={styles.optionCard}>
                <div className={styles.optionHeader}>
                  <div className={styles.optionIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3>Become a Sponsor</h3>
                </div>
                <p>Help fund parts, tools, competition fees, and travel expenses. We'll proudly display your logo and recognize your contribution at events and online.</p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>Logo placement on robot & materials</div>
                  <div className={styles.benefit}>Social media recognition</div>
                  <div className={styles.benefit}>Progress updates & reports</div>
                  <div className={styles.benefit}>Event invitations</div>
                </div>
                <Link to="/contact" className={styles.primaryButton}>
                  <span>Become a Sponsor</span>
                  <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Donation Option */}
              <div className={styles.optionCard}>
                <div className={styles.optionHeader}>
                  <div className={styles.optionIcon}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3>Make a Donation</h3>
                </div>
                <p>One-time or recurring contributions of any amount help keep our team moving forward and developing new technologies.</p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>Direct impact on team success</div>
                  <div className={styles.benefit}>Tax-deductible contribution</div>
                  <div className={styles.benefit}>Quarterly impact reports</div>
                  <div className={styles.benefit}>Community recognition</div>
                </div>
                <Link to="/contact" className={styles.secondaryButton}>
                  <span>Make a Donation</span>
                  <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Make a Difference?</h2>
            <p>Let's discuss how we can work together to advance robotics education and innovation.</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.ctaPrimary}>
                <span>Contact Us</span>
                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <a href="mailto:ncrivals@example.com" className={styles.ctaSecondary}>
                <span>Send Email</span>
                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
