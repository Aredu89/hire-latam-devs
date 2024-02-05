'use client'

import { useContext } from 'react';
import styles from './closeButton.module.css';
import { useContactForm } from '@/app/context/contactForm.context';
import { FormContext } from "../../context/form.context";

const CloseButton = () => {
  const { toggleFormContactOpen } = useContactForm();
  const { resetForm } = useContext(FormContext);

  const handleClose = () => {
    toggleFormContactOpen();
    setTimeout(() => resetForm(), 1000);
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.closeButton} onClick={handleClose}>&#10005;</button>
    </div>
  )
};

export default CloseButton;