'use client'

import styles from './contactForm.module.css';
import { useContactForm } from '@/app/context/contactForm.context';
import { Form } from '@/app/components';
import { EFieldType } from '@/app/components/form/form.types';

const formFields = [
  {
    name: 'name',
    title: 'Name',
    type: EFieldType.text,
    placeholder: 'Your name goes here...',
    required: true,
    autocomplete: 'name'
  },
  {
    name: 'email',
    title: 'Email',
    type: EFieldType.email,
    placeholder: 'Your Email here...',
    required: true,
    autocomplete: 'email'
  },
  {
    name: 'company',
    title: 'Company',
    type: EFieldType.text,
    placeholder: 'The company interested in LATAM devs...',
    required: true,
    autocomplete: 'organization'
  },
  {
    name: 'message',
    title: 'Your message for us',
    type: EFieldType.area,
    placeholder: 'Tell us about your needs...',
    required: true,
    autocomplete: 'off'
  }
];

const ContactForm = () => {
  const { formContactOpen, toggleFormContactOpen } = useContactForm();
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