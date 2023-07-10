import React from 'react';

import MenuItem from '../menuItem/menu-item.component';
import { menuItem } from '../menuItem/menu-item.types';
import styles from './menu.module.css';

const Menu = ({
  items = []
} : {
  items: menuItem[]
}) => {
  return (
    <div className={styles.menuContainer}>
      {
        items.map((item, indx) => (
          <MenuItem
            key={item.id || indx.toString()}
            title={item.title}
            slug={item.slug}
          />
        ))
      }
    </div>
  )
};

export default Menu;