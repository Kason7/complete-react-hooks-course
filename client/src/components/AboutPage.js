import React, { useContext } from 'react';
import messageContext from '../context/messageContext';
import Outer from './subComponents/Outer';

export const AboutPage = () => {
  const [contextContent] = useContext(messageContext);

  return (
    <div>
      <h1>About Page</h1>
      <h2>Message: {contextContent} </h2>
      <Outer />
    </div>
  );
};

export default AboutPage;
