import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import HomePage from './pages/HomePage';
import ThreeDPage from './pages/ThreeDPage';
import VFXPage from './pages/VFXPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavigationMenu from './components/NavigationMenu';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef(null);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavClick={handleNavigation} />;
      case '3d':
        return <ThreeDPage />;
      case 'vfx':
        return <VFXPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavClick={handleNavigation} />;
    }
  };

  return (
    <div className="app">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>

      {/* Header with Logo and Menu Toggle */}
      <header className="header">
        <button
          className="home-button"
          onClick={() => handleNavigation('home')}
          aria-label="Home"
        >
          <div className="logo">TL</div>
        </button>
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Navigation Menu */}
      <NavigationMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigation}
      />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="page-container"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default App;