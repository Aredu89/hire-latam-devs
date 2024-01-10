import { Field } from "../../form.types";
import styles from '../../form.module.css';

const AreaInput = ({
  title,
  name,
  placeholder,
  autocomplete
}: Field) => {
  return (
    <div className={styles.inputContainer}>
      <label>
        {title}
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder ? placeholder : ''}
          className={styles.input}
          autoComplete={autocomplete || 'off'}
        />
      </label>
    </div>
  )
};

export default AreaInput;