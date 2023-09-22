import React from 'react';

import { logoProps } from './logo.types';
import styles from './logo.module.css';

const Logo = ({
  footer
}: logoProps) => (
  <div className={`${styles.logoContainer} ${footer ? styles.footer : ''}`}>
    <div className={styles.logoBox}>
      <span>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='100 200 200 300'>
          <path d="M 100 200 Q 100 300 100 400 Q 200 400 300 400 Q 100 400 100 200" fill={`${footer ? "#FFF" : "#273BDF"}`} />
        </svg>
      </span>
      <span className={styles.dContainer}>
        <svg height={`${footer ? "130" : "52"}`} width={`${footer ? "80" : "32"}`} xmlns='http://www.w3.org/2000/svg' viewBox='20 200 220 500'>
          <path d="M 100 200 Q 100 350 100 400 Q 200 400 200 300 Q 200 200 100 200" fill={`${footer ? "#FFF" : "#273BDF"}`} />
        </svg>
      </span>
    </div>
    <div className={styles.name}>
      {
        footer ? <> 
          Hire <br />
          Latam <br />
          Devs
        </> :
        <span>HireLatamDevs</span>
      }
    </div>
  </div>
);

export default Logo;