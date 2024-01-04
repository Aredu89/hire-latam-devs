import { Field } from "../../form.types";

const EmailInput = ({
  name,
  placeholder
}: Field) => {
  return (
    <input name={name} type='email' placeholder={placeholder ? placeholder : ''} />
  )
};

export default EmailInput;