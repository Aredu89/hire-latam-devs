import React from 'react';

import Image from 'next/image';
import styles from './mainSection.module.css';

const MainSection = () => (
  <section className={styles.sectionContainer}>
    <h4>Find top-tier Software Engineers in Latin America</h4>
    <h2>
      <p>Save more than 40% on development cost hiring Software Engineers from LATAM</p>
    </h2>
    <h5>Make your hiring process smoother with our help.</h5>
    <div className={styles.latamMapContainer}>
      <Image
        src="/latam-map.png"
        className={styles.latamMap}
        width={400}
        height={400}
        alt="LATAM map"
        priority
      />
    </div>
  </section>
);

export default MainSection;