import { useContext } from "react";
import { InputProps } from "../../form.types";
import { FormContext } from "../../context/form.context";
import styles from '../../form.module.css';

const AreaInput = ({
  title,
  name,
  placeholder,
  autocomplete,
}: InputProps) => {
  const { getValue, handleChange } = useContext(FormContext);
  const value = getValue(name);
  const onChange = handleChange(name);

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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  )
};

export default AreaInput;