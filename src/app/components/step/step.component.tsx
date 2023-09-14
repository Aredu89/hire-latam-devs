'use client'

import React, { useEffect } from 'react';

import { stepProps } from './step.types';
import styles from './step.module.css';

const Step = ({
  number,
  title,
  description,
  size
}: stepProps) => {
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
  
    const cardElements = document.getElementsByClassName(styles.stepContainer);
    Array.from(cardElements).forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className={styles.stepContainer}>
      <h2 className={`${styles.title} ${styles[size]}`}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <span className={`${styles.number} ${styles[size]}`}>{number}</span>
    </div>
  )
};

export default Step;