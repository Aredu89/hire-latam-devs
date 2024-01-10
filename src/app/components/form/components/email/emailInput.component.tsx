import { Field } from "../../form.types";
import styles from '../../form.module.css';

const EmailInput = ({
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
          type='email'
          placeholder={placeholder ? placeholder : ''}
          className={styles.input}
          autoComplete={autocomplete || 'off'}
        />
      </label>
    </div>
  )
};

export default EmailInput;