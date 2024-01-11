import React from 'react';

import { Logo } from '@/app/components';

import styles from './footer.module.css';

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <section className={styles.infoSection}>
        <Logo footer />
        {/* <div className={styles.infoItem}>
          <h3>Visit Us</h3>
          <span>Austin, TX</span>
        </div>
        <div className={styles.infoItem}>
          <h3>Contact Us</h3>
          <span>Email</span>
        </div> */}
      </section>
      <section className={styles.registerSection}>HireLatamDevs &copy; 2024</section>
    </div>
  )
};

export default Footer;