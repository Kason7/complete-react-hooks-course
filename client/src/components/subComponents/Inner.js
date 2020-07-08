import React, { useContext } from 'react';
import messageContext from '../../context/messageContext';

export const Inner = () => {
  const [message, setMessage] = useContext(messageContext);

  const updateUseContext = () => {
    setMessage(Math.random().toString());
  };

  return (
    <>
      <h3>Inner:</h3>
      <button onClick={updateUseContext}>
        Update useContext (Local State)
      </button>
      <h2>Message: {message} </h2>
    </>
  );
};

export default Inner;
