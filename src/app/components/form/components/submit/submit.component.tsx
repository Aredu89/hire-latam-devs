import { useContext } from "react";
import { FormContext } from "../../context/form.context";
import { Button } from '../../..';

const Submit = () => {
  const { checkErrors, state } = useContext(FormContext);

  const onSubmit = () => {
    console.log('---on submit---');
    if(checkErrors()) {
      console.log('There are errors')
    } else {
      console.log('No errors');
      console.log('Form STATE::: ', state);
    };
  };

  return(
    <Button text='Send Message' onClick={onSubmit} />
  );
};

export default Submit;