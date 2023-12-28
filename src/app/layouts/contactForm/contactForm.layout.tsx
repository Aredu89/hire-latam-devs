'use client'

import styles from './contactForm.module.css';
import { useContactForm } from '@/app/context/contactForm.context';

const ContactForm = () => {
  const { formContactOpen, toggleFormContactOpen } = useContactForm();
  console.log(formContactOpen);
  return (
    <div className={`${styles.container} ${formContactOpen ? styles.open : ''}`}>
      Contact Form!
      <button onClick={() => toggleFormContactOpen()}>close</button>
    </div>
  );
};

export default ContactForm;