'use client'

import styles from './contactForm.module.css';
import { useContactForm } from '@/app/context/contactForm.context';
import { Form } from '@/app/components';
import { EFieldType } from '@/app/components/form/form.types';

const formFields = [
  {
    name: 'name',
    type: EFieldType.text,
    placeholder: 'Your name goes here...'
  },
  {
    name: 'email',
    type: EFieldType.email,
    placeholder: 'Your Email here...'
  },
  {
    name: 'company',
    type: EFieldType.text,
    placeholder: 'The company interested in LATAM devs...'
  },
  {
    name: 'message',
    type: EFieldType.area,
    placeholder: 'Tell us about your needs...'
  }
];

const ContactForm = () => {
  const { formContactOpen, toggleFormContactOpen } = useContactForm();
  console.log(formContactOpen);
  return (
    <div className={`${styles.container} ${formContactOpen ? styles.open : ''}`}>
      <div className={styles.buttonContainer}>
        <button className={styles.closeButton} onClick={() => toggleFormContactOpen()}>&#10005;</button>
      </div>
      <div className={styles.formContainer}>
        <Form fields={formFields} />
      </div>
    </div>
  );
};

export default ContactForm;