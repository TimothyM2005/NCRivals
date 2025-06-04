import React, { useState } from 'react';
import styles from './Robots.module.css';

function Robots() {
  // State to track which robot card is expanded
  const [expandedRobot, setExpandedRobot] = useState(null);

  // Function to toggle the expanded state of a robot
  const toggleRobotDetails = (index) => {
    // If the clicked robot is already expanded, collapse it, otherwise expand the new one
    setExpandedRobot(expandedRobot === index ? null : index);
  };

  // Array to hold the robot data
  const robots = [
    {
      name: 'Dash V0',
      league: 'Rival League',
      imgSrc: '/assets/DashV0.jpg',
      summary: 'Advanced swerve drive system with custom modious control system and Pi hat integration.',
      description: 'In four weeks DashV0 was created. This robot has a fully custom Swerve drive system which uses the modious control system and Pi hat. Please read our blog post for more details about the innovative engineering behind this competition-ready robot.',
      year: '2024',
      weight: '15 lbs',
      driveType: 'Swerve',
      RobotCode: 'https://github.com/BenCaunt/rival-s1-code/tree/http-new',
      DriverStation: 'https://github.com/jacobvm04/rival-s1-client',
      cadLink: 'https://cad.team-rivals.com/dash-v0',
      status: 'Deactivated'
    },
    {
      name: 'NCRivals 2025',
      league: 'FTC League',
      imgSrc: '/assets/placeholder-robot.jpg',
      summary: 'Next-generation Rival League robot currently in development for the 2025 season.',
      description: 'Our 2025 FTC robot is currently in the design and prototyping phase. This robot will feature advanced autonomous capabilities, precision engineering, and innovative mechanisms to compete at the highest level. Stay tuned for updates as we progress through the build season and reveal the exciting features we\'re developing.',
      year: '2025',
      weight: 'TBD',
      driveType: 'TBD',
      RobotCode: '#',
      DriverStation: '#',
      cadLink: '#',
      status: 'In Development'
    },
    
    // ADD MORE ROBOTS HERE - Copy the structure of the object above and change the values accordingly
  ];

  // Calculate stats
  const totalRobots = robots.length;
  const activeRobots = robots.filter(robot => robot.status === 'Active').length;
  const competitions = 2; // You can make this dynamic based on robot data

  return (
    <section className={styles.robots}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2>Our Robots</h2>
          <p className={styles.subtitle}>
            Innovative engineering solutions built for competitive robotics excellence. 
            Each robot represents our commitment to pushing technological boundaries.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{totalRobots}</div>
            <div className={styles.statLabel}>Total Robots</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{activeRobots}</div>
            <div className={styles.statLabel}>Active Robots</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{competitions}</div>
            <div className={styles.statLabel}>Competitions</div>
          </div>
        </div>

        {/* Robot Grid */}
        <div className={styles.robotGrid}>
          {/* Loop over the robots array to create a card for each robot */}
          {robots
            .sort((a, b) => parseInt(b.year) - parseInt(a.year)) // Sort by year, newest first
            .map((robot, index) => (
            <div 
              key={index} 
              className={`${styles.robotCard} ${expandedRobot === index ? styles.expanded : ''}`}
            >
              {/* Robot Image Container */}
              <div className={styles.imageContainer}>
                {robot.imgSrc === '/assets/placeholder-robot.jpg' ? (
                  <div className={styles.comingSoon}>
                    <span>Coming Soon</span>
                  </div>
                ) : (
                  <img src={robot.imgSrc} alt={robot.name} />
                )}
                <div className={styles.imageOverlay}></div>
                <div className={styles.robotBadge}>{robot.status}</div>
              </div>

              {/* Robot Content */}
              <div className={styles.robotContent}>
                <h3 className={styles.robotName}>{robot.name}</h3>
                <p className={styles.robotSummary}>{robot.summary}</p>

                {/* Quick Info */}
                <div className={styles.quickInfo}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoLabel}>Year</div>
                    <div className={styles.infoValue}>{robot.year}</div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoLabel}>Weight</div>
                    <div className={styles.infoValue}>{robot.weight}</div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoLabel}>Drive</div>
                    <div className={styles.infoValue}>{robot.driveType}</div>
                  </div>
                </div>

                {/* Expand Button */}
                <button 
                  className={styles.expandButton}
                  onClick={() => toggleRobotDetails(index)}
                >
                  <span>{expandedRobot === index ? 'Show Less' : 'Learn More'}</span>
                  <svg 
                    className={`${styles.expandIcon} ${expandedRobot === index ? styles.rotated : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded Details */}
                {expandedRobot === index && (
                  <div className={styles.robotDetails}>
                    <p>{robot.description}</p>
                    
                    <div className={styles.actionButtons}>
                      <a href={robot.RobotCode} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                        <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Robot Code
                      </a>
                      
                      <a href={robot.DriverStation} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                        <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Driver Station
                      </a>
                      
                      <a href={robot.cadLink} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                        <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        View CAD
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Robots;
