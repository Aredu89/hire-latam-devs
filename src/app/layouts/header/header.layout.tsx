import React from 'react';

import { Logo } from '@/app/components';

import styles from './header.module.css';

const Header = () => (
  <nav className={styles.navContainer}>
    <Logo />
    <div>Menu Items and Button</div>
  </nav>
);

export default Header;