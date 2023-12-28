'use client'

import {createContext, useState, useContext, ReactNode} from 'react';

type ContactFormType = {
  formContactOpen: Boolean;
  toggleFormContactOpen: () => void
};

export const ContactFormContext = createContext<ContactFormType>({
  formContactOpen: false,
  toggleFormContactOpen: () => null
});

export const useContactForm = () => useContext(ContactFormContext);

export const ContactFormProvider = ({ children }: { children: ReactNode}) => {
  const [formOpen, setFormOpen] = useState<Boolean>(false);

  const toggleFormContactOpen = () => {
    setFormOpen(prev => !prev);
  };

  const value = {
    formContactOpen: formOpen,
    toggleFormContactOpen
  };

  return <ContactFormContext.Provider value={value}>{children}</ContactFormContext.Provider>
};