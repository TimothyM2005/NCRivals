import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; // Using CSS modules for scoped styles

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when clicking on a link (mobile)
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => 
        isActive ? `${styles.homebutton} ${styles.active}` : styles.homebutton
      } onClick={handleLinkClick}>
        NC Rivals
      </NavLink>
      
      {/* Mobile menu toggle button */}
      {isMobile && (
        <button 
          className={styles.mobileMenuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}></span>
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}></span>
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>
      )}

      <ul className={`${styles.navLinks} ${isMobile && isMenuOpen ? styles.navLinksOpen : ''} ${isMobile && !isMenuOpen ? styles.navLinksClosed : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>About Us</NavLink></li>
        <li><NavLink to="/competitions" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>Competitions</NavLink></li>
        <li><NavLink to="/robots" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>Robots</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>Blog</NavLink></li>
        <li><NavLink to="/get-involved" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>Get Involved</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => 
          isActive ? styles.active : ''
        } onClick={handleLinkClick}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
