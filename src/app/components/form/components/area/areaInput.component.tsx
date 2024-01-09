import { Field } from "../../form.types";
import styles from '../../form.module.css';

const AreaInput = ({
  name,
  title,
  placeholder
}: Field) => {
  return (
    <div className={styles.inputContainer}>
      <label>{title}</label>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder ? placeholder : ''}
        className={styles.input}
      />
    </div>
  )
};

export default AreaInput;