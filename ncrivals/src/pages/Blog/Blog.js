import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export default function Blog() {
  // Blog posts data
  const blogPosts = [
    {
      title: 'Dash Strategy Overview',
      snippet: 'How we approached the 2024 Rival Robotics Game and a Breakdown of our Robot.',
      date: 'December 2024',
      readTime: '8 min read',
      category: 'Strategy',
      link: '/blog/dash',
      image: '/assets/DashV0.jpg'
    },
    {
      title: 'Zenoh Control System',
      snippet: 'Deep dive into our custom control system architecture and implementation for competitive robotics.',
      date: 'January 2025',
      readTime: '12 min read',
      category: 'Technical',
      link: '/blog/zenoh',
      image: '/assets/zenoh-dragon.jpg'
    }
  ];

  // Calculate stats
  const totalPosts = blogPosts.length;
  const categories = [...new Set(blogPosts.map(post => post.category))].length;
  const avgReadTime = Math.round(blogPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / totalPosts);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.blogTitle}>Blog</h1>
          <p className={styles.subtitle}>
            Insights from our engineering journey, technical deep-dives, and competition strategies.
            Follow our progress and learn from our innovations.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{totalPosts}</div>
            <div className={styles.statLabel}>Blog Posts</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{categories}</div>
            <div className={styles.statLabel}>Categories</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{avgReadTime}</div>
            <div className={styles.statLabel}>Avg Read Time</div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <div key={index} className={styles.blogCard}>
              {/* Blog Image Container */}
              <div className={styles.imageContainer}>
                <img src={post.image} alt={post.title} />
                <div className={styles.imageOverlay}></div>
                <div className={styles.blogBadge}>{post.category}</div>
              </div>

              {/* Blog Content */}
              <div className={styles.blogContent}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardSnippet}>{post.snippet}</p>

                {/* Quick Info */}
                <div className={styles.quickInfo}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoLabel}>Date</div>
                    <div className={styles.infoValue}>{post.date}</div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoLabel}>Read Time</div>
                    <div className={styles.infoValue}>{post.readTime}</div>
                  </div>
                </div>

                {/* Read More Button */}
                <Link to={post.link} className={styles.readMoreBtn}>
                  <span>Read More</span>
                  <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
