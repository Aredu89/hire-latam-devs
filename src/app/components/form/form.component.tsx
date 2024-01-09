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

const fieldsMap = {
  [EFieldType.text]: TextInput,
  [EFieldType.area]: AreaInput,
  [EFieldType.email]: EmailInput
};

const Form = ({
  fields
}: FormProps) => {

  const onSubbmit = () => {};

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
          />
        );
      })}
      <Button text='Send Message' onClick={onSubbmit} isSubmit />
    </form>
  )
};

export default Form;