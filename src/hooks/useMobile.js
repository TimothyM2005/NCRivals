import { useState, useEffect } from 'react';

/**
 * Custom hook for mobile device detection and mobile-specific utilities
 * @returns {Object} Mobile utilities and state
 */
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setOrientation(width > window.innerHeight ? 'landscape' : 'portrait');
    };

    // Check on mount
    checkDevice();

    // Listen for resize events
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  // Touch device detection
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Mobile utilities
  const mobileUtils = {
    // Prevent zoom on iOS form inputs
    preventZoom: (inputRef) => {
      if (inputRef && inputRef.current && isMobile) {
        inputRef.current.addEventListener('focus', () => {
          if (inputRef.current.style.fontSize !== '16px') {
            inputRef.current.style.fontSize = '16px';
          }
        });
      }
    },

    // Smooth scroll to element (mobile-optimized)
    scrollToElement: (elementId, offset = 0) => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },

    // Check if element is in viewport
    isInViewport: (element) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    // Get mobile-friendly spacing
    getSpacing: (size = 'md') => {
      if (!isMobile) return size;
      
      const mobileSpacing = {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem'
      };
      
      return mobileSpacing[size] || mobileSpacing.md;
    },

    // Debounced resize handler
    useDebounceResize: (callback, delay = 250) => {
      useEffect(() => {
        let timeoutId;
        
        const handleResize = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(callback, delay);
        };

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
          clearTimeout(timeoutId);
        };
      }, [callback, delay]);
    }
  };

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    isTouchDevice,
    screenWidth,
    orientation,
    isPortrait: orientation === 'portrait',
    isLandscape: orientation === 'landscape',
    breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
    utils: mobileUtils
  };
};

export default useMobile; 