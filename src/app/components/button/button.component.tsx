'use client'
import React, { MouseEvent } from 'react';

import { buttonProps } from './button.types';
import styles from './button.module.css';

const Button = ({
  text,
  reverseColors,
  onClick,
  isSubmit
}: buttonProps) => {
  
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };
  
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${styles.button} ${reverseColors ? styles.reverse : ''}`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  )
};

export default Button;