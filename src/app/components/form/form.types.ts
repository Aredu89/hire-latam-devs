export enum EFieldType {
  text='text',
  email='email',
  area='area'
};

export type Field = {
  name: string;
  title: string;
  type: EFieldType;
  placeholder?: string;
  required?: boolean;
  autocomplete?: string;
};

export type InputProps = {
  title: string;
  name: string;
  placeholder?: string;
  autocomplete?: string;
};

export type FormProps = {
  fields: Array<Field>
};