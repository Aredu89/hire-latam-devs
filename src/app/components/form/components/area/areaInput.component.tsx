import { Field } from "../../form.types";

const AreaInput = ({
  name,
  placeholder
}: Field) => {
  return (
    <textarea name={name} rows={4} placeholder={placeholder ? placeholder : ''} />
  )
};

export default AreaInput;