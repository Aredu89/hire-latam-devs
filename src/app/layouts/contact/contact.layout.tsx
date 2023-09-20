'use client'
import React, { useEffect } from 'react';

import styles from './contact.module.css';
import { Button } from '@/app/components';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add(styles.animation);
        }
      });
    });
  
    const cardElements = document.getElementsByClassName(styles.contactSectionContainer);
    Array.from(cardElements).forEach(el => {
      observer.observe(el);
    });
  }, []);

  return(
    <div className={styles.contactSectionContainer}>
      <h2>Ready to start building your remote team with LATAM developers?</h2>
      <Button
        text='Contact Us!'
        reverseColors
      />
    </div>
  )
};

export default Contact;