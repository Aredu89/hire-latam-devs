'use client'
import React, { useEffect } from 'react';

import Image from 'next/image';
import styles from './technologies.module.css';
import config from './technologies.config';
import { Tooltip } from "@nextui-org/react";

const Technologies = () => {
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
  
    const cardElements = document.getElementsByClassName(styles.logoContainer);
    Array.from(cardElements).forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <div id='technologies' className={styles.technologiesContainer}>
      <h1>Technologies</h1>
      <div className={styles.logosContainer}>
        {config.technologiesLogos.map(({alt, slug, animationDelay}, indx) => (
          <div 
            key={`technology-logo-${indx}`}
            className={styles.logoContainer}
            style={{
              animationDelay: animationDelay,
              transitionDelay: animationDelay
            }}
          >
            <Tooltip content={alt}>
              <Image
                src={slug}
                className={styles.image}
                width={70}
                height={70}
                alt={alt}
                priority
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Technologies;