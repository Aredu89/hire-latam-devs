import React from 'react';

import { Logo } from '@/app/components';

import styles from './footer.module.css';

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <section className={styles.infoSection}>
        <Logo footer />
        <div>
          <h3>Visit Us</h3>
          Address
        </div>
        <div>
          <h3>Contact Us</h3>
          Email
        </div>
      </section>
      <section className={styles.registerSection}>HireLatamDevs &copy; 2023</section>
    </div>
  )
};

export default Footer;