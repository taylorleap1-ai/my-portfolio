import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const skills = [
    { category: '3D & Modeling', items: ['Maya', 'Blender', 'ZBrush', 'Character Rigging', 'UV Unwrapping'] },
    { category: 'VFX & Compositing', items: ['After Effects', 'Nuke', 'Houdini', 'Particle Systems', 'Color Grading'] },
    { category: 'Motion & Animation', items: ['GSAP', 'Three.js', 'Framer Motion', 'Keyframe Animation', 'Motion Graphics'] },
  ];

  return (
    <div className="about-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>ABOUT ME</h1>
        <div className="header-line"></div>
      </motion.div>

      <div className="about-content">
        {/* Bio Section */}
        <motion.div
          className="bio-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="bio-text">
            I'm a creative professional specializing in 3D modeling, visual effects, and motion design. 
            With expertise across industry-standard tools and a passion for storytelling, I transform 
            ideas into compelling visual experiences.
          </p>
          <p className="bio-text">
            My approach combines technical precision with artistic vision, ensuring every project 
            meets the highest standards of quality and creativity.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {skills.map((skillGroup, index) => (
            <div key={skillGroup.category} className="skill-group">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
