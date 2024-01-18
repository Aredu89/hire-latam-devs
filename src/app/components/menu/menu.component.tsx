'use client'

import React from 'react';

import MenuItem from '../menuItem/menu-item.component';
import CollapseButton from '../collapseButton/collapseButton.component';
import { menuItem } from '../menuItem/menu-item.types';
import styles from './menu.module.css';
import Button from '../button/button.component';
import { useContactForm } from '@/app/context/contactForm.context';

const Menu = ({
  items = []
} : {
  items: menuItem[]
}) => {
  const { toggleFormContactOpen } = useContactForm();

  const handleOnClick = () => {
    toggleFormContactOpen();
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.itemsContainer}>
        {
          items.map((item, indx) => (
            <MenuItem
              key={item.id || indx.toString()}
              title={item.title}
              slug={item.slug}
            />
          ))
        }
        <Button
          text='Contact Us!'
          onClick={handleOnClick}
        />
      </div>
      <div className={styles.collapseButtonContainer}><CollapseButton /></div>
    </div>
  )
};

export default Menu;