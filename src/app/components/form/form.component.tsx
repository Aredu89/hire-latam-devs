import { v4 as uuidv4 } from 'uuid';
import { FormProps } from "./form.types";
import {
  TextInput,
  AreaInput,
  EmailInput
} from './components';
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
  return(
    <form className={styles.form}>
      {fields.map((field) => {
        const key = uuidv4();
        const FieldComponent = fieldsMap[field.type];
        return(<FieldComponent key={key} name={field.name} placeholder={field.placeholder} />);
      })}
    </form>
  )
};

export default Form;