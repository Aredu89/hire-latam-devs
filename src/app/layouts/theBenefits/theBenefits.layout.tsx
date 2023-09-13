import React from 'react';

import styles from './theBenefits.module.css';
import config from './theBenefits.config';
import { BenefitCard } from '@/app/components';

const TheBenefits = () => (
  <div id='benefits' className={styles.benefitsContainer}>
    <h1>The benefits</h1>
    <div className={styles.cardsContainer}>
      {config.benefits.map(({id, title, description, iconSlug}, indx) => {
          const isOdd = indx % 2 !== 0;
          return <BenefitCard 
                    key={id}
                    title={title}
                    description={description}
                    rightAlignment={isOdd}
                    iconSlug={iconSlug}
                  />
        }
      )}
    </div>
  </div>
);

export default TheBenefits;