import { Field } from "../../form.types";
import styles from '../../form.module.css';

const TextInput = ({
  title,
  name,
  placeholder,
  autocomplete
}: Field) => {
  return (
    <div className={styles.inputContainer}>
      <label>
        {title}
        <input
          name={name}
          type='text'
          placeholder={placeholder ? placeholder : ''}
          className={styles.input}
          autoComplete={autocomplete || 'off'}
        />
      </label>
    </div>
  );
};

export default TextInput;