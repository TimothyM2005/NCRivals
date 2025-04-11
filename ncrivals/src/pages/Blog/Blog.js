import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.blogGrid}>
        <div className={styles.blogCard}>
          <h2 className={styles.cardTitle}>Dash Strategy Overview</h2>
          <p className={styles.cardSnippet}>How we approached the 2024 Rival Robotics Game and a Breakdown of our Robot.</p>
          <Link to="./DashPost" className={styles.readMoreBtn}>Read More</Link>
        </div>
        {/* Add more blogCard blocks here */}
      </div>
    </div>
  );
}
