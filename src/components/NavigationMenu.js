import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/NavigationMenu.css';

const NavigationMenu = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { label: 'HOME', page: 'home' },
    { label: '3D MODELS', page: '3d' },
    { label: 'VFX', page: 'vfx' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT', page: 'contact' },
  ];

  const handleMenuClick = (page) => {
    onNavigate(page);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Menu Overlay */}
          <motion.nav
            className="menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Menu Content */}
            <div className="menu-content">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  className="menu-link"
                  onClick={() => handleMenuClick(item.page)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="glitch-text" data-text={item.label}>
                    {item.label}
                  </span>
                </motion.button>
              ))}

              {/* Social Links */}
              <motion.div
                className="menu-socials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <a href="#" className="social-link" title="GitHub">
                  GH
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  LN
                </a>
                <a href="#" className="social-link" title="Instagram">
                  IG
                </a>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
