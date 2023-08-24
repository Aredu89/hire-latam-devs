import React from 'react';

import { benefitCardProps } from './benefitCard.types';
import styles from './benefitCard.module.css';

const BenefitCard = ({title, description, rightAlignment}: benefitCardProps) => (
  <div className={styles.benefitCardContainer}>
    <h3 className={styles.title}>{title}</h3>
    {description.map((text, indx) => (<p key={indx} className={styles.description}>{text}</p>))}
  </div>
);

export default BenefitCard;