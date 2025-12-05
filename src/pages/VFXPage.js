import React from 'react';
import { motion } from 'framer-motion';
import '../styles/VFXPage.css';

const VFXPage = () => {
  const vfxItems = [
    { id: 1, title: 'Particle Effects', category: 'VFX' },
    { id: 2, title: 'Motion Graphics', category: 'VFX' },
    { id: 3, title: 'Glitch Effects', category: 'VFX' },
    { id: 4, title: 'Lighting Design', category: 'VFX' },
    { id: 5, title: 'Color Grading', category: 'VFX' },
    { id: 6, title: 'Compositing', category: 'VFX' },
  ];

  return (
    <div className="vfx-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>VFX & MOTION</h1>
        <div className="header-line"></div>
      </motion.div>

      <div className="vfx-gallery">
        {vfxItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="vfx-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="vfx-placeholder">
              <span className="vfx-icon">✨</span>
            </div>
            <h3 className="vfx-title">{item.title}</h3>
            <p className="vfx-category">{item.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VFXPage;
