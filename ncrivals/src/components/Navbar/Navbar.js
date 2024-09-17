import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Using CSS modules for scoped styles

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.homeButton}>
        NC Rivals
      </Link>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/competitions">Competitions</Link></li>
        <li><Link to="/robots">Robots</Link></li>
        <li><Link to="/get-involved">Get Involved</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
