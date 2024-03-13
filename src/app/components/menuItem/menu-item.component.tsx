'use client'

import React, { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

import { menuItem } from './menu-item.types';
import styles from './menu-item.module.css';

const MenuItem = ({
  title,
  slug
}: menuItem) => {
  const router = useRouter();

  const handleLinkClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(slug);
  };

  return(
    <a className={styles.menuItem} href={slug} onClick={handleLinkClick}>{title}</a>
  )
};

export default MenuItem;