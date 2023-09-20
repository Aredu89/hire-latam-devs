'use client'
import React from 'react';

import { buttonProps } from './button.types';
import styles from './button.module.css';

const Button = ({
  text,
  reverseColors
}: buttonProps) => {
  
  const handleOnClick = () => {
    console.log('Click contact button');
  };
  
  return (
    <button className={`${styles.button} ${reverseColors ? styles.reverse : ''}`} onClick={handleOnClick}>{text}</button>
  )
};

export default Button;