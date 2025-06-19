import { useState } from 'react';
import styles from './Competitions.module.css';

// Reusable CompetitionCard component
function CompetitionCard({ name, description, images, type }) {
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

  return (
    <div className={`${styles.competitionCard} ${isExpanded ? styles.expanded : ''}`}>
      <div 
        onClick={toggleExpand} 
        className={styles.cardHeader}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleExpand()}
      >
        <div className={styles.cardTitle}>
          <h3>{name}</h3>
          {type === 'upcoming' && <span className={styles.upcomingBadge}>Upcoming</span>}
          {type === 'past' && <span className={styles.pastBadge}>Past Event</span>}
        </div>
        <div className={`${styles.expandIcon} ${isExpanded ? styles.rotated : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </div>
      </div>
      
      {isExpanded && (
        <div className={styles.competitionDetails}>
          {description && <p className={styles.description}>{description}</p>}
          
          {images && images.length > 0 && (
            <div className={styles.imageSection}>
              <div className={styles.imageGalleryWrapper}>
                {images.length > 1 && (
                  <button 
                    className={styles.navButton} 
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                  </button>
                )}
                
                <div className={styles.imageGallery}>
                  <img
                    src={images[currentImageIndex]}
                    alt={`${name} ${currentImageIndex + 1}`}
                    className={styles.image}
                  />
                  {images.length > 1 && (
                    <div className={styles.imageCounter}>
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}
                </div>
                
                {images.length > 1 && (
                  <button 
                    className={styles.navButton} 
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                )}
              </div>
              
              {images.length > 1 && (
                <div className={styles.imageDots}>
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          
          {type === 'upcoming' && !description && (
            <div className={styles.comingSoon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>Competition details coming soon...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Competitions() {
  // Array holding competition data
  const competitions = [
    {
      name: 'Tidal Tumble - 2024',
      description: 'Tidal Tumble was our last event of the 2024 Season. Dash came with a lot of upgrades mechanically and was ready to compete. We ended up doing well in this competition and it was a lot of fun.',
      images: ['/assets/tidal1.jpg', '/assets/tidal2.jpg', '/assets/tidal3.jpg'],
      type: 'past',
    },
    {
      name: 'OC Maker Faire - 2024',
      description: 'The OC Maker Faire was our first event with our robot Dash. This was a major learning opportunity for our team and allowed us to communicate and collaborate with other teams. In the competition we placed 3rd in rankings.',
      images: ['/assets/OCMakerfair1.jpg', '/assets/OCMakerfair2.jpg', '/assets/OCMakerfair3.jpg'],
      type: 'past',
    },
    {
      name: '2025 Competitions',
      description: '',
      images: [],
      type: 'upcoming',
    },
  ];

  // Split competitions by type
  const upcomingCompetitions = competitions.filter(comp => comp.type === 'upcoming');
  const pastCompetitions = competitions.filter(comp => comp.type === 'past');

  return (
    <section className={styles.competitions}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Our Competitions</h1>
          <p className={styles.subtitle}>
            Follow our journey through competitive robotics events and see how our team has grown and evolved.
          </p>
        </div>

        <div className={styles.content}>
          {/* Upcoming Events */}
          {upcomingCompetitions.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>
                  <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                  </svg>
                  Upcoming Events
                </h2>
                <span className={styles.sectionCount}>{upcomingCompetitions.length}</span>
              </div>
              <div className={styles.competitionGrid}>
                {upcomingCompetitions.map((comp, index) => (
                  <CompetitionCard
                    key={index}
                    name={comp.name}
                    description={comp.description}
                    images={comp.images}
                    type={comp.type}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {pastCompetitions.length > 0 && (
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2>
                  <svg className={styles.sectionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Past Events
                </h2>
                <span className={styles.sectionCount}>{pastCompetitions.length}</span>
              </div>
              <div className={styles.competitionGrid}>
                {pastCompetitions.map((comp, index) => (
                  <CompetitionCard
                    key={index}
                    name={comp.name}
                    description={comp.description}
                    images={comp.images}
                    type={comp.type}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Competitions;
