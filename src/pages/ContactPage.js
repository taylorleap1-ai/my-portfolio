import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const contacts = [
    { label: 'Email', value: 'hello@taylorleap.com', link: 'mailto:hello@taylorleap.com' },
    { label: 'GitHub', value: 'github.com/taylorleap', link: '#' },
    { label: 'LinkedIn', value: 'linkedin.com/in/taylorleap', link: '#' },
    { label: 'Instagram', value: '@tayorleap', link: '#' },
  ];

  return (
    <div className="contact-page">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>GET IN TOUCH</h1>
        <div className="header-line"></div>
      </motion.div>

      <motion.div
        className="contact-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p>Ready to bring your vision to life? Let's collaborate on something amazing.</p>
      </motion.div>

      <div className="contact-methods">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.link}
            className="contact-method"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ x: 10 }}
          >
            <span className="contact-label">{contact.label}</span>
            <span className="contact-value">{contact.value}</span>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="mailto:hello@taylorleap.com"
        className="contact-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        SEND ME AN EMAIL
      </motion.a>
    </div>
  );
};

export default ContactPage;
