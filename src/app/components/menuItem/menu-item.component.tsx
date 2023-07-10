import React from 'react';
import Link from 'next/link';

import { menuItem } from './menu-item.types';
import styles from './menu-item.module.css';

const MenuItem = ({
  title,
  slug
}: menuItem) => (
  <Link className={styles.menuItem} href={slug}>{title}</Link>
);

export default MenuItem;