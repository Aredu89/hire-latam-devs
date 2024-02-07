'use client'

import { useContext, useState } from "react";
import { FormContext } from "../../context/form.context";
import { Button } from '../../..';
import PulseLoader from 'react-spinners/PulseLoader';
import styles from './submit.module.css';

const Submit = () => {
  const { checkErrors, state, setSuccess, success } = useContext(FormContext);
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
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log('Error sending message: ', error);
      }
    };
  };

  if(loading) {
    return <div className={styles.spinnerContainer}><PulseLoader color='#273BDF' /></div>;
  };

  return(
    <>
      {success && <span className={styles.success}>Message sent! We will contact you soon.</span>}
      <Button text='Send Message' onClick={onSubmit} />
      {error && <span className={styles.error}>There was an error sending the message. Please try again later</span>}
    </>
  );
};

export default Submit;