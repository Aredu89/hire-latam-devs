import React from 'react';

import { Logo, Menu } from '@/app/components';
import styles from './header.module.css';

const menuItems = [
  {
    id: 1,
    title: 'Home',
    slug: '/'
  },
  {
    id: 2,
    title: 'Benefits',
    slug: '#benefits'
  },
  {
    id: 3,
    title: 'Process',
    slug: '#process'
  },
  {
    id: 4,
    title: 'Technologies',
    slug: '#technologies'
  },
];

const Header = () => (
  <nav className={styles.navContainer}>
    <Logo />
    <Menu items={menuItems} />
  </nav>
);

export default Header;