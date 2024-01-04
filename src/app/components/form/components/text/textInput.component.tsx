import { Field } from "../../form.types";

const TextInput = ({
  name,
  placeholder
}: Field) => {
  return (
    <input name={name} type='text' placeholder={placeholder ? placeholder : ''} />
  )
};

export default TextInput;