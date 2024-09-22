import React, { useState, useEffect } from 'react';
import styles from './Competitions.module.css';

// Reusable CompetitionCard component
function CompetitionCard({ name, description, images }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setCurrentImageIndex(0); // Reset to the first image when expanding
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds when expanded
  useEffect(() => {
  }, [isExpanded, images.length]);

  return (
    <li className={styles.competitionCard}>
      <div onClick={toggleExpand} className={styles.cardTitle}>
        {name}
      </div>
      {isExpanded && (
        <div className={styles.competitionDetails}>
          <p>{description}</p>
          <div className={styles.imageGalleryWrapper}>
            <button className={styles.prevBtn} onClick={prevImage}>
              ◀
            </button>
            <div className={styles.imageGallery}>
              <img
                src={images[currentImageIndex]}
                alt={`${name} ${currentImageIndex + 1}`}
                className={styles.image}
              />
            </div>
            <button className={styles.nextBtn} onClick={nextImage}>
              ▶
            </button>
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
      description: 'Tidal Tumble - is an upcomiong event',
      images: ['/assets/tidal1.jpg', '/assets/tidal2.jpg', '/assets/tidal3.jpg'],
      type: 'upcoming',
    },
    {
      name: 'OC Maker Faire - 2024',
      description: 'The OC Maker Faire was our first event with our robot Dash. This was a major learning oppertunity for our team and allowed for us to communicate and colaborate with other teams. In the compeition we placed 3rd in rankings. ',
      images: ['/assets/OCMakerfair1.jpg', '/assets/OCMakerfair2.jpg', '/assets/OCMakerfair3.jpg'],
      type: 'past',
    },
  ]

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
