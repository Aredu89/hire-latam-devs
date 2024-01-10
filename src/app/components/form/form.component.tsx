import { v4 as uuidv4 } from 'uuid';
import { FormProps } from "./form.types";
import {
  TextInput,
  AreaInput,
  EmailInput
} from './components';
import { Button } from '..';
import { EFieldType } from './form.types';
import styles from './form.module.css';
import { useForm } from './hooks/useForm.hook';

const fieldsMap = {
  [EFieldType.text]: TextInput,
  [EFieldType.area]: AreaInput,
  [EFieldType.email]: EmailInput
};

const Form = ({
  fields
}: FormProps) => {
  const {
    state,
    handleChange
  } = useForm({ fields });

  const onSubmit = () => {};
  return(
    <form className={styles.form}>
      {fields.map((field) => {
        const key = uuidv4();
        const FieldComponent = fieldsMap[field.type];
        return(
          <FieldComponent
            key={key}
            name={field.name}
            title={field.title}
            placeholder={field.placeholder}
            autocomplete={field.autocomplete}
          />
        );
      })}
      <Button text='Send Message' onClick={onSubmit} />
    </form>
  )
};

export default Form;