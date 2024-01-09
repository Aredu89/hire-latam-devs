import { Field } from "../../form.types";
import styles from '../../form.module.css';

const TextInput = ({
  name,
  title,
  placeholder
}: Field) => {
  return (
    <div className={styles.inputContainer}>
      <label>{title}</label>
      <input
        name={name}
        type='text'
        placeholder={placeholder ? placeholder : ''}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;