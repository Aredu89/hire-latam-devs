'use client'

import { useContext, useState } from "react";
import { FormContext } from "../../context/form.context";
import { Button } from '../../..';

const Submit = () => {
  const { checkErrors, state } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    const thereAreErrors = checkErrors();
    if(thereAreErrors) {
      console.log('There are errors in the form')
    } else {
      const body = JSON.stringify(state);
      setLoading(true);
      setError(false);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: body,
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) {
          setLoading(false);
          console.log("falling over")
          throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message']);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log('Error sending message: ', error);
      }
    };
  };

  return(
    <Button text='Send Message' onClick={onSubmit} />
  );
};

export default Submit;