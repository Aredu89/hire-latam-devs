'use client'

import styles from './contactForm.module.css';
import { useContactForm } from '@/app/context/contactForm.context';

const ContactForm = () => {
  const { formContactOpen, toggleFormContactOpen } = useContactForm();
  console.log(formContactOpen);
  return (
    <div className={`${styles.container} ${formContactOpen ? styles.open : ''}`}>
      <div className={styles.buttonContainer}>
        <button className={styles.closeButton} onClick={() => toggleFormContactOpen()}>&#10005;</button>
      </div>
      <div className={styles.formClontainer}>
        FORM!
      </div>
    </div>
  );
};

export default ContactForm;