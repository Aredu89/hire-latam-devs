import { v4 as uuidv4 } from 'uuid';
import { FormProps } from "./form.types";
import {
  TextInput,
  AreaInput,
  EmailInput,
  Submit
} from './components';
import { EFieldType } from './form.types';
import styles from './form.module.css';
import { FormProvider } from './context/form.context';

const fieldsMap = {
  [EFieldType.text]: TextInput,
  [EFieldType.area]: AreaInput,
  [EFieldType.email]: EmailInput
};

const Form = ({
  fields
}: FormProps) => {
  return(
    <FormProvider fields={fields}>
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
        <Submit />
      </form>
    </FormProvider>
  );
};

export default Form;