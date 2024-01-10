'use client'

import { useState } from 'react';
import { FormProps } from '../form.types';

export const useForm = ({ fields }: FormProps) => {
  const initialState = fields.reduce((acc, val) => {
    return {
      ...acc,
      [val.name]: ''
    }
  }, {});
  const [formState, setFormState] = useState(initialState);

  const handleChange = (name: string) => (value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    state: formState,
    handleChange
  };
};