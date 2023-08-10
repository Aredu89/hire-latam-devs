import React from 'react';

import styles from './mainSection.module.css';

const MainSection = () => (
  <section className={styles.sectionContainer}>
    <h4>Find the top software engineers in Latin America</h4>
    <h2>
      <p>Save money on development costs:</p>
      <p>Hiring staff from LATAM can save you up to 40% in salaries.</p>
    </h2>
    <h5>Make your hiring process smoother with our help.</h5>
    <div className={styles.animation}>Animation!</div>
  </section>
);

export default MainSection;