'use client'
import React from 'react';

import { buttonProps } from './button.types';
import styles from './button.module.css';

const Button = ({
  text,
  isContactButton
}: buttonProps) => {
  
  const handleOnClick = () => {
    console.log('Click contact button');
  };
  
  return (
    <button className={styles.button} onClick={handleOnClick}>{text}</button>
  )
};

export default Button;