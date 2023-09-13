'use client'

import React, { useEffect } from 'react';

import Image from 'next/image';
import { benefitCardProps } from './benefitCard.types';
import styles from './benefitCard.module.css';

const BenefitCard = ({title, description, rightAlignment, iconSlug}: benefitCardProps) => {
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
  
    const cardElements = document.getElementsByClassName(styles.benefitCardContainer);
    Array.from(cardElements).forEach(el => {
      observer.observe(el);
    });
  }, [])

  return (
    <div className={`${styles.benefitCardContainer} ${rightAlignment ? styles.right : styles.left}`}>
      <h3 className={styles.title}>
        {iconSlug && <Image
          src={iconSlug}
          width={40}
          height={40}
          alt="Icon"
          priority
        />}
        {title}
      </h3>
      {description.map((text, indx) => (<p key={indx} className={styles.description}>{text}</p>))}
    </div>
  );
};

export default BenefitCard;