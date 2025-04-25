'use client'

import React from 'react';

import { Logo, Menu, CollapseMenu } from '@/app/components';
import styles from './header.module.css';
import { useCollapsedMenu } from '@/app/context/collapsedMenu.context';

const menuItems = [
  {
    id: 1,
    title: 'Home',
    slug: '#'
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

const Header = () => {
  const { open } = useCollapsedMenu();
  return (
    <>
      <nav className={styles.navContainer}>
        <Logo />
        <Menu items={menuItems} />
      </nav>
      <CollapseMenu items={menuItems} open={open} />
    </>
  )
};

export default Header;