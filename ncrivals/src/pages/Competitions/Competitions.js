import React, { useState } from 'react';
import styles from './Competitions.module.css';

// Reusable CompetitionCard component
function CompetitionCard({ name, description, images }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li onClick={toggleExpand} className={styles.competitionCard}>
      {name}
      {isExpanded && (
        <div className={styles.competitionDetails}>
          <p>{description}</p>
          <div className={styles.imageGallery}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`${name} ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

function Competitions() {
  // Array holding competition data
  const competitions = [
    {
      name: 'Tidal Tumble - 2024',
      description: 'Tidal Tumble is an exciting robotics competition where teams compete to complete underwater challenges.',
      images: ['/assets/tidal1.jpg', '/assets/tidal2.jpg', '/assets/tidal3.jpg'],
      type: 'upcoming',
    },
    {
      name: 'OC Maker Faire - 2024',
      description: 'The OC Maker Faire event showcased some of the most innovative robotics designs in 2024.',
      images: ['/assets/OCMakerfair1.jpg', '/assets/OCMakerfair2.jpg', '/assets/OCMakerfair3.jpg'],
      type: 'past',
    },
  ];

  // Split competitions by type
  const upcomingCompetitions = competitions.filter(comp => comp.type === 'upcoming');
  const pastCompetitions = competitions.filter(comp => comp.type === 'past');

  return (
    <section className={styles.competitions}>
      <div className={styles.container}>
        <h2>Competitions</h2>
        
        {/* Upcoming Events */}
        <h3>Upcoming Events</h3>
        <ul className={styles.competitionList}>
          {upcomingCompetitions.map((comp, index) => (
            <CompetitionCard
              key={index}
              name={comp.name}
              description={comp.description}
              images={comp.images}
            />
          ))}
        </ul>

        {/* Past Events */}
        <h3>Past Events</h3>
        <ul className={styles.competitionList}>
          {pastCompetitions.map((comp, index) => (
            <CompetitionCard
              key={index}
              name={comp.name}
              description={comp.description}
              images={comp.images}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Competitions;
