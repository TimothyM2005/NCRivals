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
      name: 'Dash V0 - Rival League',       // Robot's name
      imgSrc: '/assets/DashV0.jpg',         // Path to the robot's image
      description: 'In a four week time period DashV0 was created. This robot has a fully custom Swerve drive system which uses the modious control system and Pi hat',  // Short description of the robot
      RobotCode: 'https://github.com/BenCaunt/rival-s1-code/tree/http-new',  // Link to the code repository
      DriverStation: 'https://github.com/jacobvm04/rival-s1-client',
      cadLink: 'https://cad.team-rivals.com/dash-v0'       // Link to the CAD files
    },
    // ADD MORE ROBOTS HERE - Copy the structure of the object above and change the values accordingly
  ];

  return (
    <section className={styles.robots}>
      <div className={styles.container}>
        <h2>Our Robots</h2>
        <div className={styles.robotGrid}>
          {/* Loop over the robots array to create a card for each robot */}
          {robots.map((robot, index) => (
            <div 
              key={index} 
              className={`${styles.robotCard} ${expandedRobot === index ? styles.expanded : ''}`} 
              onClick={() => toggleRobotDetails(index)}  // Toggle robot details when the card is clicked
            >
              <img src={robot.imgSrc} alt={robot.name} />   {/* Display robot image */}
              <p>{robot.name}</p>                          {/* Display robot name */}

              {/* If this robot is expanded, show its description and links */}
              {expandedRobot === index && (
                <div className={styles.robotDetails}>
                  <p>{robot.description}</p>              {/* Display robot description */}
                  <a href={robot.RobotCode} target="_blank" rel="noopener noreferrer">View RobotCode</a>  {/* Link to the robot's code */}
                  <a href={robot.DriverStationCode} target="_blank" rel="noopener noreferrer">View DriverStationCode</a>  {/* Link to the robot's code */}
                  <a href={robot.cadLink} target="_blank" rel="noopener noreferrer">View CAD</a>    {/* Link to the robot's CAD */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Robots;
