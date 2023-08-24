import React from 'react';

import styles from './theBenefits.module.css';
import config from './theBenefits.config';
import { BenefitCard } from '@/app/components';

const TheBenefits = () => (
  <div className={styles.benefitsContainer}>
    <h1>The benefits</h1>
    <div className={styles.cardsContainer}>
      {config.benefits.map(({id, title, description}, indx) => {
          const isOdd = indx % 2 !== 0;
          return <BenefitCard key={id} title={title} description={description} rightAlignment={isOdd} />
        }
      )}
    </div>
  </div>
);

export default TheBenefits;