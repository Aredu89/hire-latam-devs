'use client'

import { useState, createContext, ReactNode } from 'react';
import { Field } from '../form.types';
import { EFieldType } from '../form.types';
import validator from 'email-validator';

type ObjectType = {
  [key: string]: string;
};

export const FormContext = createContext<{
  getValue: (name: string) => string;
  handleChange: (name: string) => (value: string) => void;
  checkErrors: () => boolean;
  state: ObjectType;
  getError: (name: string) => string;
}>({
  getValue: () => '',
  handleChange: () => () => null,
  checkErrors: () => false,
  state: {},
  getError: () => ''
});

export const FormProvider = ({fields, children}: {fields: Array<Field>, children: ReactNode}) => {
  const initialState: ObjectType = fields.reduce((acc, val) => {
    return {
      ...acc,
      [val.name]: ''
    }
  }, {});
  const [formState, setFormState] = useState(initialState);
  const [errorsState, setErrorsState] = useState(initialState);

  const handleChange = (name: string) => (value: string) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrorsState((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const getValue = (name: string) => {
    return formState[name];
  };

  const getError = (name: string) => {
    return errorsState[name];
  };

  const checkErrors = () => {
    let errorExists = false;
    const addErrors: ObjectType = {};
    fields.forEach((field) => {
      if(field.required) {
        if(!formState[field.name]) {
          addErrors[field.name] = 'This field is required';
          errorExists = true;
        }
      }
      if(
        field.type === EFieldType.email &&
        !addErrors[field.name]
        ) {
        if(!validator.validate(formState[field.name])) {
          addErrors[field.name] = 'The format of the email is incorrect';
          errorExists = true;
        }
      }
    });
    setErrorsState((prev) => ({
      ...prev,
      ...addErrors
    }));
    return errorExists;
  };

  const value = {
    getValue,
    handleChange,
    checkErrors,
    state: formState,
    getError
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
};