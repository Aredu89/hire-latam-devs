import React from 'react';

import styles from './logo.module.css';

const Logo = ({
  size = 'small'
}) => (
  <div className={styles.logoContainer}>
    <div className={`${styles.logoBox} ${styles[size]}`}>
      <span>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='100 200 200 300'>
          <path d="M 100 200 Q 100 300 100 400 Q 200 400 300 400 Q 100 400 100 200" fill="#273BDF" />
        </svg>
      </span>
      <span className={styles.dContainer}>
        <svg height="52" width="32" xmlns='http://www.w3.org/2000/svg' viewBox='20 200 220 500'>
          <path d="M 100 200 Q 100 350 100 400 Q 200 400 200 300 Q 200 200 100 200" fill="#273BDF" />
        </svg>
      </span>
    </div>
    <div className={styles.name}>HireLatamDevs</div>
  </div>
);

export default Logo;