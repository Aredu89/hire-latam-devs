export enum EFieldType {
  text='text',
  email='email',
  area='area'
};

export type Field = {
  name: string;
  title: string;
  placeholder?: string;
};

type FormField = {
  type: EFieldType;
} & Field;

export type FormProps = {
  fields: Array<FormField>
};