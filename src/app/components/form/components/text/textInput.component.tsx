import { useContext } from "react";
import { FormContext } from "../../context/form.context";
import { InputProps } from "../../form.types";
import styles from '../../form.module.css';

const TextInput = ({
  title,
  name,
  placeholder,
  autocomplete
}: InputProps) => {
  const { getValue, handleChange } = useContext(FormContext);
  const value = getValue(name);
  const onChange = handleChange(name);
  
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default TextInput;