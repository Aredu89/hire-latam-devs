export enum EFieldType {
  text='text',
  email='email',
  area='area'
};

export type Field = {
  title: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  autocomplete?: string;
};

type FormField = {
  type: EFieldType;
} & Field;

export type FormProps = {
  fields: Array<FormField>
};