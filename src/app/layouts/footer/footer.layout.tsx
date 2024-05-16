import React from 'react';

import { Logo } from '@/app/components';

import styles from './footer.module.css';

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <section className={styles.infoSection}>
        <Logo footer />
      </section>
      <div className={styles.infoSection}>
        <h4>hello@hirelatamdevs.com</h4>
      </div>
      <section className={styles.registerSection}>HireLatamDevs &copy; 2024</section>
    </div>
  )
};

export default Footer;